import React from "react";
import { FilterType } from "../../schema/FilterSchema";
import { mockUseGetAllFilters } from "../../services/filterService";
import { useStyles } from "./FilterSectionStyles";
import { RangeFilter as RangeFilterType } from "../../schema/FilterSchema";
import { CheckboxFilter as CheckboxFilterType } from "../../schema/FilterSchema";
import RangeFilter from "./range-filter/RangeFilter";
import CheckboxFilter from "./checkbox-filter/CheckboxFilter";
import { GCAccordion } from "../../gc-components/GCAccordion";
import { Accordion } from "@mantine/core";

const FilterSection = () => {
    const filters = mockUseGetAllFilters();
    const {classes} = useStyles();
    return <div className={classes.section}>
        {filters.map((item) => (
            <GCAccordion className={classes.filter}>
                <Accordion.Item unstyled className={classes.filterItem} value={item.name}>
                    <Accordion.Control>{item.name}</Accordion.Control>
                    <Accordion.Panel>
                        {item.type == FilterType.RANGE ? <RangeFilter filter={item as RangeFilterType}/> :
                            <CheckboxFilter filter={item as CheckboxFilterType}/>}
                    </Accordion.Panel>
                </Accordion.Item>
            </GCAccordion>
        ))}

    </div>;
}

export default FilterSection;