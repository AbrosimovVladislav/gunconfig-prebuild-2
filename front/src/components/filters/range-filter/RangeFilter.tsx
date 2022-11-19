import React from "react";
import { FilterItem } from "../../../schema/FilterSchema";
import { useStyles } from "./RangeFilterStyles";
import { GCRange } from "../../../gc-components/CGRange";

interface RangeFilterProps {
    filter: FilterItem;
}

const RangeFilter = ({filter}: RangeFilterProps) => {
    const {classes} = useStyles();
    return <div className={classes.filter}>
        <GCRange placeholders={[filter.value[0].toString(), filter.value[1].toString()]}/>

    </div>;
}

export default RangeFilter;