import React from "react";
import { RangeFilter } from "../../../services/filterService";

const RangeFilter = (filter: RangeFilter) => {
    console.log(filter);
    return <div>
        {JSON.stringify(filter)}
    </div>;
}

export default RangeFilter;