import React from "react";
import { useQuery } from "react-query";
import { getAllNfts } from "../services/nftService";
import { NFTMicroCard } from "../components/nft-micro-card";
import { NFTCardDto } from "../schema/NFTCatalogSchema";

const NFTCatalog = () => {
    const { data, error, isLoading, isError } = useQuery("getAllNfts", getAllNfts);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error</div>;
    }

    return (
        <div>
            {data.map((item: NFTCardDto) => (
                <NFTMicroCard item={item} key={item.id} />
            ))}
        </div>
    );
};

export default NFTCatalog;
