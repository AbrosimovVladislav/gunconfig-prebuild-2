import {useFilterStore} from "../../store/FilterStore";
import {useGetNFTByFilters} from "../../services/nftService";
import Catalog from "../catalog/Catalog";
import React, {useEffect} from "react";
import {useRouter} from "next/router";
import {createFilterItemsFromUrlParams} from "../../services/filterService";
import {FilterItem} from "../../schema/FilterSchema";
import {NFTCard} from "../../schema/NFTCatalogSchema";
import {useStyles} from "./NFTCatalogWrapperStyles";
import NFTMicroCard from "../nft-micro-card/NFTMicroCard";

interface NFTCatalogWrapperProps{
    layout: string;
}

const NFTCatalogWrapper = ({layout}: NFTCatalogWrapperProps) => {
    const { classes } = useStyles();
    const {filters, updateFilterStore} = useFilterStore();
    const router = useRouter();
    let urlParams = router.asPath.split("?")[1];
    const [data, isLoading, isError, isSuccess] = useGetNFTByFilters(filters);

    useEffect(() => {
        //if url have some filtration params in it, refresh filter store according them
        if (urlParams) {
            const filterItems: FilterItem[] = createFilterItemsFromUrlParams(urlParams);
            updateFilterStore(filterItems);
        }
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error</div>;
    }

    if (isSuccess) {
        return <Catalog layout={layout}>
            {data.map((item: NFTCard) => (
                <div key={item.nftCardId} className={`${classes.card} ${classes[layout]}`}>
                    <NFTMicroCard item={item}/>
                </div>
            ))}
        </Catalog>;
    }

};

export default NFTCatalogWrapper;
