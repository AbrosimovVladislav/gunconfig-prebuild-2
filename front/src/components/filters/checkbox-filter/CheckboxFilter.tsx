import React from "react";
import { CheckboxFilter } from "../../../services/filterService";

interface CheckboxFilterProps {
    filter: CheckboxFilter;
}

const CheckboxFilter = ({filter}: CheckboxFilterProps) => {
    return <div>
        {filter.name}
    </div>;
}

export default CheckboxFilter;