import React from "react";
import { RangeFilter } from "../../../services/filterService";

interface RangeFilterProps {
    filter: RangeFilter;
}

const RangeFilter = ({filter}: RangeFilterProps) => {
    console.log(filter);
    console.log(filter.name);
    return <div>
        {filter.name}
    </div>;
}

export default RangeFilter;