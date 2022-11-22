import { useFilterStore } from "../../store/FilterStore";
import { useGetAllNFTs } from "../../services/nftService";
import Catalog from "../catalog/Catalog";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { fromStringToFilterItems } from "../../services/filterService";
import { FilterItem } from "../../schema/FilterSchema";

const NFTCatalogWrapper = () => {
  const { filters, updateFilterStore } = useFilterStore();
  const router = useRouter();
  let query = router.asPath.split("?")[1];
  const [data, error, isLoading, isError] = useGetAllNFTs(filters);

  useEffect(() => {
    console.log("QUERY", query);
    if (query) {
      const filterItems: FilterItem[] = fromStringToFilterItems(query);
      updateFilterStore(filterItems);
    }
    //update state
    //create mapping function from url params to object
    //and set it fully to state
    //create new store function to replace whole state
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return <Catalog nfts={data} />;
};

export default NFTCatalogWrapper;
