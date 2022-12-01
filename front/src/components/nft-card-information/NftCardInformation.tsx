import { GCList, GCListItem, GCText } from "../../gc-components";
import { NFTCard } from "../../schema/NFTCatalogSchema";
import { useStyles } from "./NftCardInformationStyle";

interface NftCardInformationProps {
  data: NFTCard;
}

const NftCardInformation = ({ data }: NftCardInformationProps) => {
  const { classes } = useStyles();

  return (
    <div>
      <GCText h1 bold>{data.name}</GCText>
      <GCText bold className={classes.priceText}>
        Price: {data.mintingPrice}
      </GCText>
      <div className={classes.listSize}>
        <GCList size={12}>
          <GCListItem>Rarity: {data.rarity}</GCListItem>
          <GCListItem>Collection: {data.collection}</GCListItem>
          <GCListItem>First owner: {data.firstOwner}</GCListItem>
          <GCListItem>Creation date: {data.mintingDate}</GCListItem>
        </GCList>
      </div>
      <GCText bold className={classes.textDescription}>Description:</GCText>

      <GCText>{data.gunDescription}</GCText>
    </div>
  );
};

export default NftCardInformation;
