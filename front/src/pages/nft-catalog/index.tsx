import React, { useState } from "react";
import { useStyles } from "./NFTCatalogStyles";
import FilterSection from "../../components/filters/FilterSection";
import NFTCatalogWrapper from "../../components/nft-catalog-wrapper/NFTCatalogWrapper";
import GCContainer from "../../gc-components/GCContainer";
import GCSegmentedControl from "../../gc-components/segmented-control/GCSegmentedControl";
import Sorting from "../../components/sorting/Sorting";

const NFTCatalog = () => {
    const { classes } = useStyles();

    const [layout, setLayout] = useState("catalogOfThree");

    return (
        <GCContainer>
            <div className={classes.page}>
                <FilterSection />
                <div className={classes.catalogAndControls}>
                    <div className={classes.controls}>
                        <Sorting />
                        <GCSegmentedControl value={layout} onChange={setLayout} />
                    </div>
                    <NFTCatalogWrapper className={classes.catalog} layout={layout} />
                </div>
            </div>
        </GCContainer>
    );
};

export default NFTCatalog;
