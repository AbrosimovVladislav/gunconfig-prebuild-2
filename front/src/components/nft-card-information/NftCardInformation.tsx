import { GCList, GCListItem, GCText } from "../../gc-components";
import { NFTCard } from "../../schema/NFTCatalogSchema";
import { useStyles } from "./NftCardInformationStyle";
import { IconAlertCircle, IconPhoto } from "@tabler/icons";

interface NftCardInformationProps {
  data: NFTCard;
}

const NftCardInformation = ({ data }: NftCardInformationProps) => {
  const { classes } = useStyles();

  return (
    <>
      <GCText weight={700} size={32} color={"black"}>
        {data.name}
      </GCText>
      <GCText weight={400} size={16} color={"black"} className={classes.collection}>
        Collection:
        <GCText size={16} weight={700} color={"darkviolet"}>
          {data.collection}
        </GCText>
      </GCText>

      <div className={classes.frame}>
        <GCText size={16} color={"black"} weight={700} className={classes.frameTitle}>
          <IconPhoto color={"darkviolet"} /> About the Build
        </GCText>
        <GCText size={16} color={"black"} weight={400} className={classes.frameText}>
          {data.gunDescription}
        </GCText>
      </div>

      <div className={classes.frame}>
        <GCText size={16} color={"black"} weight={700} className={classes.frameTitle}>
          <IconAlertCircle color={"darkviolet"} /> More Info
        </GCText>
        <GCList size={16} listStyleType="none" className={classes.list}>
          <GCListItem className={classes.listItem}>
            <GCText>Minting Price</GCText>
            <GCText weight={700}>{data.mintingPrice}</GCText>
          </GCListItem>
          <GCListItem className={classes.listItem}>
            <GCText>Collection</GCText>
            <GCText weight={700}>{data.collection}</GCText>
          </GCListItem>
          <GCListItem className={classes.listItem}>
            <GCText>First Owner</GCText>
            <GCText weight={700}>{data.firstOwner}</GCText>
          </GCListItem>
          <GCListItem className={classes.listItem}>
            <GCText>Rarity</GCText>
            <GCText weight={700}>{data.rarity}</GCText>
          </GCListItem>
          <GCListItem className={classes.listItem}>
            <GCText>Creation Date</GCText>
            <GCText weight={700}>{data.mintingDate}</GCText>
          </GCListItem>
        </GCList>
      </div>
    </>
  );
};

export default NftCardInformation;
