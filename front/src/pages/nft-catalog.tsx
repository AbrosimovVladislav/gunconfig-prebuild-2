import React from "react";
import {useGetAllNfts} from "../services/nftService";
import {NFTCardDto} from "../schema/NFTCatalogSchema";
import NFTMicroCard from "../components/nft-micro-card/NFTMicroCard";

const NFTCatalog = () => {
  const [data, error, isLoading, isError] = useGetAllNfts();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
      <div>
        {data.map((item: NFTCardDto) => (
            <NFTMicroCard item={item} key={item.id}/>
        ))}
      </div>
  );
};

export default NFTCatalog;
