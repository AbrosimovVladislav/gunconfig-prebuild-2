import { NFTCard } from "../../schema/NFTCatalogSchema";
import React from "react";
import NFTMicroCard from "../nft-micro-card/NFTMicroCard";
import { useStyles } from "./CatalogStyles";
import Link from "next/link";
import { FRONT_CURRENT_PATH } from "../../config/env-paths";

interface CatalogProps {
    nfts: NFTCard[];
    layout: string;
    className?: string;
}

const Catalog = ({nfts, layout, className}: CatalogProps) => {
    const {classes} = useStyles();

    return (
        <div className={className}>
            <div className={classes[layout]}>
                {nfts.map((item: NFTCard) => (
                    <Link href={FRONT_CURRENT_PATH + ":3000/nft/" + item.nftCardId}>
                        <div key={item.nftCardId}>
                            <NFTMicroCard item={item}/>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Catalog;
