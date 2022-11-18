import { GCList, GCListItem, GCText } from "../../gc-components";
import { NFTCard } from "../../schema/NFTCatalogSchema";
import { useStyles } from "../header/HeaderSectionStyles";

interface NftCardInformationProps {
    data: NFTCard;
}

const NftCardInformation = ({ data }: NftCardInformationProps) => {
    const { classes } = useStyles();

    return (
    
        <div className={classes.container}>
            <GCText className={classes.textBold}>{data.name}</GCText>
            <GCText className={classes.priceText}>Price: {data.mintingPrice}</GCText>
            <div className={classes.listSize}>
                <GCList size={12}>
                    <GCListItem>MINTING DATA: {data.mintingDate}</GCListItem>
                    <GCListItem>RARITY: {data.rarity}</GCListItem>
                    <GCListItem>COLLECTION: {data.collection}</GCListItem>
                    <GCListItem>FIRST OWNER: {data.firstOwner}</GCListItem>
                </GCList>
            </div>
            <div className={classes.textDescription}>Description:</div>

            <GCText size={12}>{data.gunDescription}</GCText>
        </div>
        
    );
};

export default NftCardInformation;
