import {IconArrowsSort} from "@tabler/icons";
import GCSelect from "../../gc-components/GCSelect";
import React, {useEffect, useState} from "react";
import {mockUseGetSorting} from "../../services/sortService";
import {SortingItem} from "../../schema/SortingSchema";
import {useRouter} from "next/router";

const Sorting = () => {
    const sortingItems: SortingItem[] = mockUseGetSorting();
    const router = useRouter();

    const [sortingKey, setSortingKey] = useState<string | null>(null);

    useEffect(() => {
        setSortingKey("mintingPrice,asc");
    }, [])

    useEffect(() => {
        let currentPath = router.asPath;
        if (currentPath.includes("?")) {
            if (currentPath.includes("sort")) {
                const existingSortingKey = sortingItems.filter(item => currentPath.includes(item.key))[0].key;
                currentPath = currentPath.replace(existingSortingKey, sortingKey)
            } else {
                currentPath = currentPath + "&sort=" + sortingKey;
            }
        } else {
            currentPath = currentPath + "?sort=" + sortingKey;
        }
        if (sortingKey != null) {
            router.push(currentPath);
        }
    }, [sortingKey])

    return <GCSelect
        onChange={setSortingKey}
        value={sortingKey}
        icon={<IconArrowsSort size={14}/>}
        data={sortingItems.map(item => item.key)}/>
}
export default Sorting;