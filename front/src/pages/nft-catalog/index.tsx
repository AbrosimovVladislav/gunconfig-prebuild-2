import React, {useState} from "react";
import { useStyles } from "./NFTCatalogStyles";
import FilterSection from "../../components/filters/FilterSection";
import NFTCatalogWrapper from "../../components/nft-catalog-wrapper/NFTCatalogWrapper";
import GCContainer from "../../gc-components/GCContainer";
import GCSegmentedControl from "../../gc-components/segmented-control/GCSegmentedControl";
import Sorting from "../../components/sorting/Sorting";

const NFTCatalog = () => {
  const { classes } = useStyles();

    const [layout, setLayout] = useState('grid-9');

  return (
    <GCContainer className={classes.page}>
      <FilterSection />
        <Sorting/>
      <NFTCatalogWrapper />
        <GCSegmentedControl value={layout} onChange={setLayout}/>
    </GCContainer>
  );
};

export default NFTCatalog;
