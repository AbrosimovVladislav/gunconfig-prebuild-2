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
}

const NFTMicroCard = ({item}: NFTMicroCardProps) => {
    const {classes} = useStyles();

    return (
        <Link href={FRONT_CURRENT_PATH + ":3000/nft/" + item.nftCardId}>
            <GCCard withBorder radius="md" className={classes.card}>
                <GCCardSection className={classes.imageSection}>
                    <GCImage src={item.nftImageUrl} alt="gun"/>
                </GCCardSection>
                <GCGroup className={classes.content} position="apart" mt="md">
                    <GCText weight={500}>{item.name}</GCText>
                    <GCBadge>{item.collection}</GCBadge>
                    <GCText size="sm" color="dimmed" weight={500} sx={{lineHeight: 2}}>
                        Minting price
                    </GCText>
                    <GCText variant="gradient" align="end">{item.mintingPrice} ETH</GCText>
                </GCGroup>
            </GCCard>
        </Link>
    );
};

export default NFTMicroCard;
