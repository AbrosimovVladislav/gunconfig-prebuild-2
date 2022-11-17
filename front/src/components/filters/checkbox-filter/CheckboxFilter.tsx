import React from "react";
import { FilterItem } from "../../../schema/FilterSchema";

interface CheckboxFilterProps {
    filter: FilterItem;
}

const CheckboxFilter = ({ filter }: CheckboxFilterProps) => {
    return (
        <div>
            <h2> CF : {filter.showName}</h2>
            {filter.value.map((value) => {
                return <div>{value}</div>;
            })}
        </div>
    );
};

export default CheckboxFilter;
