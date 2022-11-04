import { NFTCard } from "../../schema/NFTCatalogSchema";
import { useStyles } from "./NFTMicroCardStyles";
import { GCBadge, GCGroup, GCText, GCCard, GCCardSection, GCImage } from "../../gc-components";

interface NFTMicroCardProps {
    item: NFTCard;
}

const NFTMicroCard = ({ item }: NFTMicroCardProps) => {
    const { classes } = useStyles();

    return (
        <GCCard  className={classes.card}>
            <GCCardSection className={classes.imageSection}>
                <GCImage className={classes.image} src={item.nftImageUrl} alt="gun" />
            </GCCardSection>
            <div className={classes.content}>
                <div className={classes.section}>
                    <GCText weight={700}>{item.nftName}</GCText>
                    <GCBadge>{item.productName}</GCBadge>
                </div>
                <div className={classes.section}>
                    <GCText size="sm" color="" weight={500} sx={{lineHeight: 2}} mt={3}>
                        Minting price
                    </GCText>
                    <GCText weight={700}>0,0031 ETH</GCText>
                </div>
            </div>
        </GCCard>
    );
};

export default NFTMicroCard;
