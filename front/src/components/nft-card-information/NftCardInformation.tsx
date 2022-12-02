import {GCList, GCListItem, GCText} from "../../gc-components";
import {NFTCard} from "../../schema/NFTCatalogSchema";
import {useStyles} from "./NftCardInformationStyle";
import {IconAlertCircle, IconPhoto} from "@tabler/icons";

interface NftCardInformationProps {
    data: NFTCard;
}

const NftCardInformation = ({data}: NftCardInformationProps) => {
    const {classes} = useStyles();

    return (
        <div className={classes.infoContainer}>
            <GCText h1 bold> {data.name} </GCText>
            <GCText weight={400} size={16} className={classes.collection}>
                Collection:
                <GCText primary>
                    {data.collection}
                </GCText>
            </GCText>

            <div className={classes.frame}>
                <GCText size={16} weight={700} className={classes.frameTitle}>
                    <IconPhoto className={classes.frameIcon}/> About the Build
                </GCText>
                <GCText size={16} weight={400} className={classes.frameText}>
                    {data.gunDescription}
                </GCText>
            </div>

            <div className={classes.frame}>
                <GCText size={16} weight={700} className={classes.frameTitle}>
                    <IconAlertCircle className={classes.frameIcon}/> More Info
                </GCText>
                <GCList size={16} listStyleType="none" className={classes.list}>
                    <GCListItem className={classes.listItem}>
                        <GCText>Minting Price</GCText>
                        <GCText weight={700} className={classes.listData}>{data.mintingPrice}</GCText>
                    </GCListItem>
                    <GCListItem className={classes.listItem}>
                        <GCText>First Owner</GCText>
                        <GCText weight={700} className={classes.listData}>{data.firstOwner}</GCText>
                    </GCListItem>
                    <GCListItem className={classes.listItem}>
                        <GCText>Rarity</GCText>
                        <GCText weight={700} className={classes.listData}>{data.rarity}</GCText>
                    </GCListItem>
                    <GCListItem className={classes.listItem}>
                        <GCText>Creation Date</GCText>
                        <GCText weight={700} className={classes.listData}>{data.mintingDate}</GCText>
                    </GCListItem>
                </GCList>
            </div>
        </div>
    );
};

export default NftCardInformation;
