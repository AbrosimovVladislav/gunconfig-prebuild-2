import React from "react";
import { useGetFilters } from "../../../services/filterService";
import { useStyles } from "./FilterSectionStyles";
import RangeFilter from "./range-filter/RangeFilter";
import CheckboxFilter from "./checkbox-filter/CheckboxFilter";
import { GCAccordion } from "../../../gc-components/accordion/GCAccordion";
import { FilterType } from "../../../schema/nft/FilterType";

const FilterSection = () => {
    const { classes } = useStyles();

    const [data, isLoading, isError, isSuccess] = useGetFilters();

    if (isSuccess) {
        return (
            <div className={classes.section}>
                {data.map((filterItem) => (
                    <GCAccordion
                        key={filterItem.filterKey}
                        className={classes.filter}
                        showName={filterItem.showName}
                        panel={filterItem.filterType == FilterType.RANGE
                            ? (<RangeFilter filter={filterItem} />)
                            : (<CheckboxFilter currentFilter={filterItem} />)}
                    />
                ))}
            </div>
        );
    }
};

export default FilterSection;
