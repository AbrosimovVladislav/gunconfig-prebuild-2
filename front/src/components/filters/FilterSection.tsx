import React from "react";
import { FilterType, getAllFilters } from "../../services/filterService";
import { useStyles } from "./FilterSectionStyles";
import { RangeFilter as RangeFilterType } from "../../services/filterService";
import { CheckboxFilter as CheckboxFilterType } from "../../services/filterService";
import RangeFilter from "./range-filter/RangeFilter";
import CheckboxFilter from "./checkbox-filter/CheckboxFilter";

const FilterSection = () => {
    const filters = getAllFilters();
    const {classes} = useStyles();
    console.log(filters);
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