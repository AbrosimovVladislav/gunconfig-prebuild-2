import React from "react";
import { RangeFilter } from "../../../schema/FilterSchema";

interface RangeFilterProps {
    filter: RangeFilter;
}

const RangeFilter = ({filter}: RangeFilterProps) => {
    return <div>
        {filter.name}
    </div>;
}

export default RangeFilter;