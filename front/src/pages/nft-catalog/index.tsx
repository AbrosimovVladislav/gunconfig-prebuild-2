import React from "react";
import { useStyles } from "./NFTCatalogStyles";
import FilterSection from "../../components/filters/FilterSection";
import NFTCatalogWrapper from "../../components/catalog/NFTCatalogWrapper";
import GCContainer from "../../gc-components/GCContainer";

const NFTCatalog = () => {
    const { classes } = useStyles();

    return (
        <GCContainer className={classes.page}>
            <FilterSection />
            <NFTCatalogWrapper />
        </GCContainer>
    );
};

export default NFTCatalog;
