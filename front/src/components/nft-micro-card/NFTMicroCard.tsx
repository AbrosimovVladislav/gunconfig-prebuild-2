import { NFTCard } from "../../schema/NFTCatalogSchema";
import { useStyles } from "./NFTMicroCardStyles";
import { GCBadge, GCGroup, GCText, GCCard, GCCardSection, GCImage } from "../../gc-components";

interface NFTMicroCardProps {
    item: NFTCard;
}

const NFTMicroCard = ({ item }: NFTMicroCardProps) => {
    const { classes } = useStyles();

    return (
        <GCCard withBorder radius="md" className={classes.card}>
            <GCCardSection className={classes.imageSection}>
                <GCImage src={item.nftImageUrl} alt="gun" />
            </GCCardSection>
            <GCGroup className={classes.content} position="apart" mt="md">
                <div>
                    <GCText weight={500}>{item.nftName}</GCText>
                </div>
                <GCBadge variant="gradient">{item.productName}</GCBadge>
                <GCText size="sm" color="dimmed" weight={500} sx={{ lineHeight: 2 }} mt={3}>
                    Minting price
                </GCText>
                <GCText variant="gradient">0,0031 ETH</GCText>
            </GCGroup>
        </GCCard>
    );
};

export default NFTMicroCard;
