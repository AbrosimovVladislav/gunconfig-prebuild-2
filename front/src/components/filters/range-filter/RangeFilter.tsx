import React from "react";
import { FilterItem } from "../../../schema/FilterSchema";

interface RangeFilterProps {
    filter: FilterItem;
}

const RangeFilter = ({ filter }: RangeFilterProps) => {
    return (
        <div>
            <h2> RF : {filter.showName}</h2>
            <div>
                {filter.value[0]} - {filter.value[1]}
            </div>
        </div>
    );
};

export default RangeFilter;
