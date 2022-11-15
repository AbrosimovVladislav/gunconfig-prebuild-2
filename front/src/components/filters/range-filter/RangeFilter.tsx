import React from "react";
import { RangeFilter } from "../../../services/filterService";

interface RangeFilterProps {
    filter: RangeFilter;
}

const RangeFilter = ({filter}: RangeFilterProps) => {
    return <div>
        {filter.name}
    </div>;
}

export default RangeFilter;