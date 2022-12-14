import { NFTCard } from "../../schema/NFTCatalogSchema";
import { useStyles } from "./NftCarouselStyles";
import {GCCarousel} from "../../gc-components/carousel/GCCarousel";

interface NftCarouselProps {
  data: NFTCard;
}

const NftCarousel = ({data}: NftCarouselProps) => {
    const {classes} = useStyles();

    return (
        <GCCarousel>
        </GCCarousel>
    );
};

export default NftCarousel;
