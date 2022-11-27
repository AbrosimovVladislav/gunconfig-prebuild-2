import { IconArrowsSort } from "@tabler/icons";
import GCSelect from "../../gc-components/GCSelect";
import React from "react";
import { mockUseGetSorting } from "../../services/sortService";

const Sorting = () => {
    const data = mockUseGetSorting();
    return <GCSelect
        icon={<IconArrowsSort size={14}/>}
        data={data}/>
}
export default Sorting;