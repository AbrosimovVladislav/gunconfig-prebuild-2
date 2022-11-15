import React from "react";
import { CheckboxFilter } from "../../../schema/FilterSchema";

interface CheckboxFilterProps {
    filter: CheckboxFilter;
}

const CheckboxFilter = ({filter}: CheckboxFilterProps) => {
    return <div>
        {filter.value.map(value => {
            return <div>
                {value}
            </div>;
        })}
    </div>;
}

export default CheckboxFilter;