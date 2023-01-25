import { useStyles } from "./NftCarouselStyles";
import { GCCarousel } from "../../../gc-components/carousel/GCCarousel";
import { GCText } from "../../../gc-components";
import React from "react";
import NFTMicroCard from "../../page-nft-catalog/nft-micro-card/NFTMicroCard";
import { ShortNFTCard } from "../../../schema/nft/ShortNFTCard";

interface NftCarouselProps {
    data: ShortNFTCard[];
    header?: string;
}

const NftCarousel = ({ data, header }: NftCarouselProps) => {
    const { classes } = useStyles();

    return (
        <>
            {header && <GCText className={classes.header} h2 bold>
                {header}
            </GCText>}
            {data && <GCCarousel className={classes.carousel}>
                {data?.map((nft) =>
                    <NFTMicroCard key={nft.nftCardId} item={nft} />)
                }
            </GCCarousel>}
        </>
    );
};

NftCarousel.defaultProps = {
    header: "More",
};

export default NftCarousel;
