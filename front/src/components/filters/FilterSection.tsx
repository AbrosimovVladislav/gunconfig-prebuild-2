import React from "react";
import { FilterType } from "../../schema/FilterSchema";
import { useGetFilters } from "../../services/filterService";
import { useStyles } from "./FilterSectionStyles";
import RangeFilter from "./range-filter/RangeFilter";
import CheckboxFilter from "./checkbox-filter/CheckboxFilter";

const FilterSection = () => {
    const [data, isLoading, isError, isSuccess] = useGetFilters();

    const { classes } = useStyles();

    if (isSuccess) {
        return (
            <div className={classes.section}>
                {data.map((filterItem) => (
                    <div className={classes.section}>
                        {filterItem.filterType == FilterType.RANGE ? (
                            <RangeFilter filter={filterItem} />
                        ) : (
                            <CheckboxFilter filter={filterItem} />
                        )}
                    </div>
                ))}
            </div>
        );
    }
};

export default FilterSection;
