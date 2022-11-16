import React from "react";
import { FilterType } from "../../schema/FilterSchema";
import { mockUseGetAllFilters } from "../../services/filterService";
import { useStyles } from "./FilterSectionStyles";
import { RangeFilter as RangeFilterType } from "../../schema/FilterSchema";
import { CheckboxFilter as CheckboxFilterType } from "../../schema/FilterSchema";
import RangeFilter from "./range-filter/RangeFilter";
import CheckboxFilter from "./checkbox-filter/CheckboxFilter";

const FilterSection = () => {
    const filters = mockUseGetAllFilters();
    const {classes} = useStyles();
    return <div className={classes.section}>
        {filters.map((item) => (
            <div className={classes.section}>
                {item.type == FilterType.RANGE ? <RangeFilter filter={item as RangeFilterType}/> :
                    <CheckboxFilter filter={item as CheckboxFilterType}/>}
            </div>
        ))}

    </div>;
}

export default FilterSection;