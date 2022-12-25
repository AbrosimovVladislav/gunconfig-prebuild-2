import {NFTCard} from "../../schema/NFTCatalogSchema";
import {useStyles} from "./NFTMicroCardStyles";
import {
    GCBadge,
    GCGroup,
    GCText,
    GCCard,
    GCCardSection,
    GCImage,
} from "../../gc-components";
import {FRONT_CURRENT_PATH} from "../../config/env-paths";
import Link from "next/link";

interface NFTMicroCardProps {
    item?: NFTCard;
    sliderCard?: boolean;
}

const NFTMicroCard = ({item, sliderCard}: NFTMicroCardProps) => {
    const {classes} = useStyles();

    return (
        <Link href={FRONT_CURRENT_PATH + ":3000/nft/" + item.nftCardId}>
            <GCCard withBorder radius="md" className={sliderCard ? `${classes.sliderCard} ${classes.card}` : classes.card}>
                <GCCardSection className={sliderCard ? `${classes.sliderImageSection} ${classes.imageSection}` : classes.imageSection}>
                    <GCImage src={item.nftImageUrl} alt="gun"/>
                </GCCardSection>
                <GCGroup className={classes.content} position="apart" mt="md">
                    <GCText bold lineClamp={1}>{item.name}</GCText>
                    <GCBadge>{item.collection}</GCBadge>
                    <GCText gray>Minting price</GCText>
                    <GCText defaultGradient align="end">{item.mintingPrice} ETH</GCText>
                </GCGroup>
            </GCCard>
        </Link>
    );
};

export default NFTMicroCard;
