import { NFTCard } from "../../schema/NFTCatalogSchema";
import { useStyles } from "./NftCarouselStyles";
import {GCCarousel} from "../../gc-components/carousel/GCCarousel";
import {GCText} from "../../gc-components";
import React from "react";
import NFTMicroCard from "../nft-micro-card/NFTMicroCard";
import {GCAccordion} from "../../gc-components/accordion/GCAccordion";

interface NftCarouselProps {
  data: NFTCard[];
  header?: string;
}

const NftCarousel = ({data, header}: NftCarouselProps) => {
    const {classes} = useStyles();

    return (
        <>
            {header && <GCText className={classes.header} h2 bold>
                {header}
            </GCText>}
            {data && <GCCarousel className={classes.carousel}>
                {data?.map((nft) =>
                    <NFTMicroCard sliderCard key={nft.nftCardId} item={nft}/>)
                }
            </GCCarousel>}
        </>
    );
};

NftCarousel.defaultProps = {
    header: "More",
};

export default NftCarousel;
