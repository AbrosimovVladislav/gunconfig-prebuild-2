package com.gunconfig.querybuilder;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Component;

import javax.persistence.criteria.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor
public class QueryBuilder {
    /**
     * This is used to avoid multiple `join` on the same table.
     */

    private final PathCache pathCache;
    private final QBParamExtractor qbParamExtractor;

    public <BE extends BasicEntity> CriteriaQuery<BE> createSelectCriteriaQueryFromParamMap(CriteriaBuilder criteriaBuilder,
                                                                                            Map<String, String> requestParams,
                                                                                            Class<BE> entityClass) {
        List<QBParam> dslParams = parseRequestParamMap(requestParams);

        CriteriaQuery<BE> criteriaQuery = criteriaBuilder.createQuery(entityClass);
        Root<BE> root = criteriaQuery.from(entityClass);
        criteriaQuery.select(root);

        Predicate[] predicates = dslParams.stream()
                .map(qbparam -> createSinglePredicate(criteriaBuilder, root, qbparam))
                .toArray(Predicate[]::new);
        criteriaQuery.where(predicates);
        return criteriaQuery;
    }

    public <BE extends BasicEntity> CriteriaQuery<Long> createCountCriteriaQueryFromParamMap(CriteriaBuilder criteriaBuilder,
                                                                                             Map<String, String> requestParams,
                                                                                             Class<BE> entityClass) {
        List<QBParam> dslParams = parseRequestParamMap(requestParams);

        CriteriaQuery<Long> criteriaQuery = criteriaBuilder.createQuery(Long.class);
        Root<BE> root = criteriaQuery.from(entityClass);
        criteriaQuery.select(criteriaBuilder.countDistinct(root));

        Predicate[] predicates = dslParams.stream()
                .map(qbparam -> createSinglePredicate(criteriaBuilder, root, qbparam))
                .toArray(Predicate[]::new);
        criteriaQuery.where(predicates);
        return criteriaQuery;
    }

    public <BE extends BasicEntity> CriteriaQuery<BE> addSort(CriteriaBuilder cb,
                                                              CriteriaQuery<BE> cq,
                                                              Pageable pageable) {
        return createSortingPredicate(cb, cq, pageable);
    }

    private Predicate createSinglePredicate(CriteriaBuilder criteriaBuilder, Root root, QBParam qbParam) {
        List<String> entities = qbParam.entities;
        Path path = buildPath(qbParam.paramName, entities, root);
        return qbParam.operation.getPredicate(qbParam.paramName, qbParam.paramValue, criteriaBuilder, path);
    }

    private Path buildPath(String paramName, List<String> entities, Root root) {
        Path path;
        if (entities.isEmpty()) {
            path = root.get(paramName);
        } else {
            String rootEntityName = entities.get(0);
            path = pathCache.getValue().computeIfAbsent(rootEntityName, root::join);
            for (int i = 1; i < entities.size(); i++) {
                String childEntityName = entities.get(i);
                if (pathCache.getValue().get(childEntityName) == null) {
                    path = ((Join) path).join(childEntityName);
                    pathCache.getValue().put(childEntityName, path);
                }
            }
            path = path.get(paramName);
        }
        return path;
    }

    private <BE extends BasicEntity> CriteriaQuery<BE> buildGroupByExpression(CriteriaQuery<BE> cq, Root<?> root, List<String> sortProperties) {
        Path path = root.get(sortProperties.get(0));
        sortProperties.remove(0);
        for (String sortProperty : sortProperties) {
            path = path.get(sortProperty);
        }
        return cq.groupBy(root, path);
    }

    private <BE extends BasicEntity> CriteriaQuery<BE> createSortingPredicate(CriteriaBuilder criteriaBuilder, CriteriaQuery<BE> cq, Pageable pageable) {
        Sort.Order sortingOrder = pageable.getSort().iterator().next();
        String sortingPropertyKey = sortingOrder.getProperty();
        List<String> sortProperties = Arrays.asList(sortingPropertyKey.split("\\."));
        List<String> entitiesAndPropertyName = new ArrayList<>(sortProperties);
        String propertyName = entitiesAndPropertyName.remove(entitiesAndPropertyName.size() - 1);
        Root<?> root = cq.getRoots().iterator().next();
        Path sortingPath = buildPath(propertyName, entitiesAndPropertyName, root);
        cq = buildGroupByExpression(cq, root, new ArrayList<>(sortProperties));
        return cq.orderBy(
                sortingOrder.isAscending()
                        ? criteriaBuilder.asc(sortingPath)
                        : criteriaBuilder.desc(sortingPath)
        );
    }

    private List<QBParam> parseRequestParamMap(Map<String, String> requestParams) {
        return requestParams.entrySet()
                .stream()
                .map(e -> qbParamExtractor.extractQbParam(e.getKey(), e.getValue()))
                .collect(Collectors.toList());
    }

}
