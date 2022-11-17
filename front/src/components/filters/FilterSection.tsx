import React from "react";
import { FilterType } from "../../schema/FilterSchema";
import { useGetFilters } from "../../services/filterService";
import { useStyles } from "./FilterSectionStyles";
import RangeFilter from "./range-filter/RangeFilter";
import CheckboxFilter from "./checkbox-filter/CheckboxFilter";
import { GCAccordion } from "../../gc-components/GCAccordion";
import { Accordion } from "@mantine/core";

const FilterSection = () => {
    const [data, isLoading, isError, isSuccess] = useGetFilters();
    const {classes} = useStyles();
    if (isSuccess) {
        return <div className={classes.section}>
            {data.map((filterItem) => (
                <GCAccordion className={classes.filter}>
                    <Accordion.Item unstyled className={classes.filterItem} value={filterItem.showName}>
                        <Accordion.Control>{filterItem.showName}</Accordion.Control>
                        <Accordion.Panel>
                            {filterItem.filterType == FilterType.RANGE ? <RangeFilter filter={filterItem}/> :
                                <CheckboxFilter filter={filterItem}/>}
                        </Accordion.Panel>
                    </Accordion.Item>
                </GCAccordion>
            ))}

        </div>;
    }
}

export default FilterSection;