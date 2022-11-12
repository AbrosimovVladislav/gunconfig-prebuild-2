import { NFTCard } from "../../schema/NFTCatalogSchema";
import React from "react";
import NFTMicroCard from "../nft-micro-card/NFTMicroCard";
import { useStyles } from "./CatalogStyles";
import FilterSection from "../filters/FilterSection";

interface CatalogProps {
    nfts: NFTCard[];
}

const Catalog = ({ nfts }: CatalogProps) => {
    const { classes } = useStyles();

    return (
        <div>
        <FilterSection />
        <div className={classes.catalog}>
            {nfts.map((item: NFTCard) => (
                <div className={classes.card} key={item.nftCardId}>
                    <NFTMicroCard item={item} />
                </div>
            ))}
        </div>
        </div>
    );
};

export default Catalog;
