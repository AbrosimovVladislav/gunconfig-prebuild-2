import { GCSquareContainer } from "../../../gc-components/square-container/GCSquareContainer";
import { useStyles } from "./NFTMicroCardStyles";
import { GCBadge, GCCard, GCCardSection, GCGroup, GCImage, GCText } from "../../../gc-components";
import { FRONT_CURRENT_PATH } from "../../../config/env-paths";
import Link from "next/link";
import { ShortNFTCard } from "../../../schema/nft/ShortNFTCard";

interface NFTMicroCardProps {
    item?: ShortNFTCard;
}

const NFTMicroCard = ({ item }: NFTMicroCardProps) => {
    const { classes } = useStyles();

    return (
        <Link href={FRONT_CURRENT_PATH + ":3000/nft/" + item.nftCardId}>
            <GCCard withBorder radius="md" className={classes.card}>
                <GCCardSection>
                    <GCSquareContainer>
                        <GCImage className={classes.imageSection} src={item.nftImageUrl}
                                 alt="gun" />
                    </GCSquareContainer>
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
