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
            <GCText h3 gray  className={classes.collection}>
                Collection:
                <GCText h3 primary bold>
                    {data.collection}
                </GCText>
            </GCText>

            <div className={classes.frame}>
                <GCText h3 bold className={classes.frameTitle}>
                    <IconPhoto className={classes.frameIcon}/> About the Build
                </GCText>
                <GCText h3 className={classes.frameText}>
                    {data.gunDescription}
                </GCText>
            </div>

            <div className={classes.frame}>
                <GCText h3 bold className={classes.frameTitle}>
                    <IconAlertCircle className={classes.frameIcon}/> More Info
                </GCText>
                <GCList listStyleType="none">
                    <GCListItem className={classes.listItem}>
                        <GCText h3>Minting Price</GCText>
                        <GCText h3 bold className={classes.listData}>{data.mintingPrice}</GCText>
                    </GCListItem>
                    <GCListItem className={classes.listItem}>
                        <GCText h3>First Owner</GCText>
                        <GCText h3 bold  className={classes.listData}>{data.firstOwner}</GCText>
                    </GCListItem>
                    <GCListItem className={classes.listItem}>
                        <GCText h3>Rarity</GCText>
                        <GCText h3 bold  className={classes.listData}>{data.rarity}</GCText>
                    </GCListItem>
                    <GCListItem className={classes.listItem}>
                        <GCText h3>Creation Date</GCText>
                        <GCText h3 bold  className={classes.listData}>{data.mintingDate}</GCText>
                    </GCListItem>
                </GCList>
            </div>
        </div>
    );
};

export default NftCardInformation;
