import React, {useState} from "react";
import {useStyles} from "./NFTCatalogStyles";
import FilterSection from "../../components/filters/FilterSection";
import NFTCatalogWrapper from "../../components/nft-catalog-wrapper/NFTCatalogWrapper";
import GCContainer from "../../gc-components/GCContainer";
import GCSegmentedControl from "../../gc-components/segmented-control/GCSegmentedControl";
import Sorting from "../../components/sorting/Sorting";

const NFTCatalog = () => {
    const {classes} = useStyles();

    const [layout, setLayout] = useState('grid-9');

    return (
        <div className={classes.page}>
            <GCContainer>
                <FilterSection/>
                <Sorting/>
                <div className={classes.catalogAndControls}>
                    <NFTCatalogWrapper className={classes.catalog} layout={layout}/>
                    <div className={classes.controls}>
                        <GCSegmentedControl value={layout} onChange={setLayout}/>
                    </div>
                </div>
            </GCContainer>
        </div>
    );
};

export default NFTCatalog;
