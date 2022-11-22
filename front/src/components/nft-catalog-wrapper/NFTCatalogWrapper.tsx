import {useFilterStore} from "../../store/FilterStore";
import {useGetNFTByFilters} from "../../services/nftService";
import Catalog from "../catalog/Catalog";
import React, {useEffect} from "react";
import {useRouter} from "next/router";
import {createFilterItemsFromQueryPostfix} from "../../services/filterService";
import {FilterItem} from "../../schema/FilterSchema";

const NFTCatalogWrapper = () => {
    const {filters, updateFilterStore} = useFilterStore();
    const router = useRouter();
    let query = router.asPath.split("?")[1];
    const [data, isLoading, isError, isSuccess] = useGetNFTByFilters(filters);

    useEffect(() => {
        console.log("QUERY", query);
        if (query) {
            const filterItems: FilterItem[] = createFilterItemsFromQueryPostfix(query);
            updateFilterStore(filterItems);
        }
        //update state
        //create mapping function from url params to object
        //and set it fully to state
        //create new store function to replace whole state
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error</div>;
    }

    if (isSuccess) {
        return <Catalog nfts={data}/>;
    }

};

export default NFTCatalogWrapper;
