import React from "react";
import { useGetAllNFTs } from "../services/nftService";
import Catalog from "../components/catalog/Catalog";
import { useStyles } from "./NFTCatalogStyles";
import FilterSection from "../components/filters/FilterSection";

const NFTCatalog = () => {
    const [data, error, isLoading, isError] = useGetAllNFTs();
    const {classes} = useStyles();
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error</div>;
    }

    return <div className={classes.page}>
        <FilterSection/>
        <Catalog nfts={data}/>
    </div>;
};

export default NFTCatalog;
