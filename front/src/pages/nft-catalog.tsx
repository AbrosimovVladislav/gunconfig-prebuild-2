import React from "react";
import { useStyles } from "./NFTCatalogStyles";
import FilterSection from "../components/filters/FilterSection";
import NFTCatalogWrapper from "../components/catalog/NFTCatalogWrapper";

const NFTCatalog = () => {
    const { classes } = useStyles();

    return (
        <div className={classes.page}>
            <FilterSection />
            <NFTCatalogWrapper />
        </div>
    );
};

export default NFTCatalog;
