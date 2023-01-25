import Catalog from "../../common/catalog/Catalog";
import React from "react";
import { useRouter } from "next/router";
import { useStyles } from "./NFTCatalogWrapperStyles";
import NFTMicroCard from "../nft-micro-card/NFTMicroCard";
import { getNFTsByUrlParams } from "../../../services/nftService";
import { ShortNFTCard } from "../../../schema/nft/ShortNFTCard";

interface NFTCatalogWrapperProps {
    layout: string;
}

const NFTCatalogWrapper = ({ layout }: NFTCatalogWrapperProps) => {
    const { classes } = useStyles();
    const router = useRouter();
    const {nfts, isLoading, isError, isSuccess} = getNFTsByUrlParams(router);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error</div>;
    }

    if (isSuccess) {
        return <Catalog layout={layout}>
            {nfts.map((item: ShortNFTCard) => (
                <div key={item.nftCardId} className={`${classes.card} ${classes[layout]}`}>
                    <NFTMicroCard item={item} />
                </div>
            ))}
        </Catalog>;
    }

};

export default NFTCatalogWrapper;
