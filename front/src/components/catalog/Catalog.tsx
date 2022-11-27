import React, { ReactNode } from "react";
import { useStyles } from "./CatalogStyles";
import {NFTCard} from "../../schema/NFTCatalogSchema";
import React from "react";
import NFTMicroCard from "../nft-micro-card/NFTMicroCard";
import {useStyles} from "./CatalogStyles";

interface CatalogProps {
  nfts: NFTCard[];
  children: ReactNode;
  layout?: string;
  className?: string;
}

const Catalog = ({ children, layout, className }: CatalogProps) => {
  const { classes } = useStyles();

    return (
        <div className={className}>
            <div className={classes[layout]}>
              {children}
                {/*{nfts.map((item: NFTCard) => (*/}
                {/*    <div key={item.nftCardId} className={classes.card}>*/}
                {/*        <NFTMicroCard item={item}/>*/}
                {/*    </div>*/}
                {/*))}*/}
            </div>
        </div>
    );
};

export default Catalog;

Catalog.defaultProps = {
    layout: "catalogOfThree",
};