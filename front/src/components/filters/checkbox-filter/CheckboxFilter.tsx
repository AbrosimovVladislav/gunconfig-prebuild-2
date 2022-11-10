import React from "react";
import { CheckboxFilter } from "../../../services/filterService";

const CheckboxFilter = (filter: CheckboxFilter) => {
    return <div>
        {JSON.stringify(filter)}
    </div>;
}

export default CheckboxFilter;