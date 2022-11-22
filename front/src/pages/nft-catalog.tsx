import React, { useState } from "react";
import { useGetAllNFTs } from "../services/nftService";
import Catalog from "../components/catalog/Catalog";
import { useStyles } from "./NFTCatalogStyles";
import FilterSection from "../components/filters/FilterSection";
import GCSegmentedControl from "../gc-components/segmented-control/GCSegmentedControl";

const NFTCatalog = () => {
    const [data, error, isLoading, isError] = useGetAllNFTs();
    const {classes} = useStyles();
    const [layout, setLayout] = useState('grid-9');
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error {error.message}</div>;
    }

    return <div className={classes.page}>
        <FilterSection/>
        <div className={classes.catalog}>
            <GCSegmentedControl value={layout} onChange={setLayout}/>
            <Catalog nfts={data}/>
        </div>
    </div>;
};

export default NFTCatalog;
