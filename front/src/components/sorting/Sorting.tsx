import {IconArrowsSort} from "@tabler/icons";
import GCSelect from "../../gc-components/GCSelect";
import React, {useEffect, useState} from "react";
import {mockUseGetSorting} from "../../services/sortService";
import {
    addParamToUrl,
    changeSingleValueForParam,
    getParamFromUrlByKey
} from "../../services/urlService";
import {useRouter} from "next/router";

const Sorting = () => {
    const data = mockUseGetSorting();
    const router = useRouter();
    const [sortingValue, setSortingValue] = useState("mintingPrice,asc");

    useEffect(() => {
        let value = getParamFromUrlByKey(router, "sort");
        if (value) {
            setSortingValue(value.value[0] + "," + value.value[1]);
            changeSingleValueForParam(router, "sort", value.value[0] + "," + value.value[1])
        }
    }, [])

    useEffect(() => {
        if (getParamFromUrlByKey(router, "sort")) {
            changeSingleValueForParam(router, "sort", sortingValue)
        } else {
            addParamToUrl(router, {key: "sort", value: [sortingValue]})
        }
    }, [sortingValue])

    return <GCSelect
        value={sortingValue}
        onChange={setSortingValue}
        icon={<IconArrowsSort size={14}/>}
        data={data}/>
}
export default Sorting;