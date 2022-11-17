package com.gunconfig.nft.repo;

import com.gunconfig.nft.model.filtration.FilterItem;
import com.gunconfig.querybuilder.SelectFromRepo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FilterItemRepo extends JpaRepository<FilterItem, Long>, SelectFromRepo {
}
