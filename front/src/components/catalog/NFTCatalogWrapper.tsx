import { useFilterStore } from "../../store/FilterStore";
import { useGetAllNFTs } from "../../services/nftService";
import Catalog from "./Catalog";
import React from "react";

const NFTCatalogWrapper = () => {
    const { filters } = useFilterStore();
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
