import { NFTCard } from "../../schema/NFTCatalogSchema";
import React from "react";
import NFTMicroCard from "../nft-micro-card/NFTMicroCard";
import { useStyles } from "./CatalogStyles";

interface CatalogProps {
    nfts: NFTCard[];
}

const Catalog = ({ nfts }: CatalogProps) => {
    const { classes } = useStyles();

    return (
        <div className={classes.catalog}>
            {nfts.map((item: NFTCard) => (
                <div className={classes.card}>
                    <NFTMicroCard item={item} key={item.id} />
                </div>
            ))}
        </div>
    );
};

export default Catalog;