import React from "react";
import { useGetAllNFTs } from "../services/nftService";
import Catalog from "../components/catalog/Catalog";

const NFTCatalog = () => {
    const [data, error, isLoading, isError] = useGetAllNFTs();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error</div>;
    }

    return <Catalog nfts={data} />;
};

export default NFTCatalog;
