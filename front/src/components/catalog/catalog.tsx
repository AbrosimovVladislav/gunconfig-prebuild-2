import { NFTCardDto } from "../../schema/NFTCatalogSchema";
import React from "react";
import NFTMicroCard from "../nft-micro-card/NFTMicroCard";
import { useStyles } from "./styles";

const Catalog = ({ nfts }) => {
    const { classes } = useStyles();

    return (
        <div className={classes.catalog}>
            {nfts.map((item: NFTCardDto) => (
                <div className={classes.card}>
                    <NFTMicroCard item={item} key={item.id} />
                </div>
            ))}
        </div>
    );
};

export default Catalog;
