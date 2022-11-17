import React from "react";
import { CheckboxFilter } from "../../../schema/FilterSchema";
import { GCCheckbox } from "../../../gc-components/GCCheckbox";
import { useStyles } from "./CheckboxFilterStyles";

interface CheckboxFilterProps {
    filter: CheckboxFilter;
}

const CheckboxFilter = ({filter}: CheckboxFilterProps) => {
    const {classes} = useStyles();
    return <div className={classes.filter}>
        {filter.value.map(value => {
            return <GCCheckbox className={classes.filter} label={value}>
                {value}
            </GCCheckbox>;
        })}
    </div>;
}

export default CheckboxFilter;