import { useFilterStore } from "../../store/FilterStore";
import { useGetAllNFTs } from "../../services/nftService";
import Catalog from "./Catalog";
import React, { useEffect } from "react";
import { useRouter } from "next/router";

const NFTCatalogWrapper = () => {
  const { filters } = useFilterStore();
  const router = useRouter();
  let query = router.asPath.split("?")[1];

  useEffect(() => {
    console.log("DATA", query);
    //update state
    //create mapping function from url params to object
    //and set it fully to state
    //create new store function to replace whole state
  }, []);

  const [data, error, isLoading, isError] = useGetAllNFTs(filters);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return <Catalog nfts={data} />;
};

export default NFTCatalogWrapper;
