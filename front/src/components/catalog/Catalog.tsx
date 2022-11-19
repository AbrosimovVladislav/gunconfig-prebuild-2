import { NFTCard } from "../../schema/NFTCatalogSchema";
import React from "react";
import NFTMicroCard from "../nft-micro-card/NFTMicroCard";
import { useStyles } from "./CatalogStyles";
import Link from "next/link";
import { FRONT_CURRENT_PATH } from "../../consts/env-paths";

interface CatalogProps {
  nfts: NFTCard[];
}

const Catalog = ({ nfts }: CatalogProps) => {
  const { classes } = useStyles();

  return (
    <div className={classes.catalog}>
      {nfts.map((item: NFTCard) => (
        <Link href={FRONT_CURRENT_PATH + ":3000/nft/" + item.nftCardId}>
          <div className={classes.card} key={item.nftCardId}>
            <NFTMicroCard item={item} />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Catalog;
