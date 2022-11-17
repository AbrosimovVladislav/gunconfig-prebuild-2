import React from "react";
import { RangeFilter } from "../../../schema/FilterSchema";
import { useStyles } from "./RangeFilterStyles";
import { GCRange } from "../../../gc-components/CGRange";

interface RangeFilterProps {
    filter: RangeFilter;
}

const RangeFilter = ({filter}: RangeFilterProps) => {
    const {classes} = useStyles();
    return <div className={classes.filter}>
        <GCRange placeholders={[filter.value["start"].toString(), filter.value["end"].toString()]}/>

    </div>;
}

export default RangeFilter;