import React from "react";
import { Filter, FilterType, getAllFilters } from "../../services/filterService";
import { useStyles } from "./FilterSectionStyles";
import RangeFilter from "./range-filter/RangeFilter";
import CheckboxFilter from "./checkbox-filter/CheckboxFilter";
import Filter from "../../services/filterService";

const FilterSection = () => {
    const filters = getAllFilters();
    const { classes } = useStyles();
    console.log(filters);
    return <div className={classes.section}>
        {filters.map((item) => (
            <div className={classes.section}>
                {item.type == FilterType.RANGE ? <RangeFilter filter={item: RangeFilter}/> : <CheckboxFilter/>}
            </div>
        ))}

    </div>;
}

export default FilterSection;