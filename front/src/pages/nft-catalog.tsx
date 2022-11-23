import React from "react";
import { useGetAllNFTs } from "../services/nftService";
import Catalog from "../components/catalog/Catalog";
import { useStyles } from "./NFTCatalogStyles";
import FilterSection from "../components/filters/FilterSection";
import NFTMicroCard from "../components/nft-micro-card/NFTMicroCard";
import { NFTCard } from "../schema/NFTCatalogSchema";
import Link from "next/link";
import { FRONT_CURRENT_PATH } from "../config/env-paths";

const NFTCatalog = () => {
  const [data, isLoading, isError, isSuccess] = useGetAllNFTs();
  const { classes } = useStyles();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  if (isSuccess) {
    return (
      <div className={classes.page}>
        <FilterSection />
        <Catalog layout={"catalogOfFour"}>
          {data.map((item: NFTCard) => (
            <Link
              key={item.nftCardId}
              href={FRONT_CURRENT_PATH + ":3000/nft/" + item.nftCardId}
            >
              <div className={classes.card}>
                <NFTMicroCard item={item} />
              </div>
            </Link>
          ))}
        </Catalog>
      </div>
    );
  }
};

export default NFTCatalog;
