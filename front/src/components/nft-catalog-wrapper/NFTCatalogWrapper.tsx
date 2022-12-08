import {useGetNFTByFilters} from "../../services/nftService";
import Catalog from "../catalog/Catalog";
import React from "react";
import {useRouter} from "next/router";
import {NFTCard} from "../../schema/NFTCatalogSchema";
import {useStyles} from "./NFTCatalogWrapperStyles";
import NFTMicroCard from "../nft-micro-card/NFTMicroCard";

interface NFTCatalogWrapperProps{
    layout: string;
}

const NFTCatalogWrapper = ({layout}: NFTCatalogWrapperProps) => {
    const { classes } = useStyles();
    const router = useRouter();
    const [data, isLoading, isError, isSuccess] = useGetNFTByFilters(router);

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
