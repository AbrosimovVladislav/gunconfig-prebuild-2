import { GCList, GCListItem, GCText } from "../../gc-components";
import { NFTCard } from "../../schema/NFTCatalogSchema";
import { useStyles } from "./NftCardInformationStyle";
import { IconAlertCircle } from "@tabler/icons";
import { IconPhoto } from "@tabler/icons";

interface NftCardInformationProps {
  data: NFTCard;
}

const NftCardInformation = ({ data }: NftCardInformationProps) => {
  const { classes } = useStyles();

  return (
    <div>
      <GCText weight={700} size={25} color={"black"}>
        {data.name}
      </GCText>

      <div className={classes.collectionText}>
        <GCText weight={400} size={15} color={"black"}>
          Collection:
        </GCText>
      </div>

      <div className={classes.descriptionPanel}>
        <div className={classes.imageBox}>
          <IconPhoto />

          <GCText
            size={13}
            color={"black"}
            weight={700}
            className={classes.textPosition}
          >
            About the Build
          </GCText>
        </div>

        <GCText
          size={12}
          color={"black"}
          weight={400}
          className={classes.gunDes}
        >
          {data.gunDescription}
        </GCText>
      </div>

      <div
        className={`${classes.descriptionPanel} ${classes.informationPanel}`}
      >
        <div className={classes.imageBox}>
          <IconAlertCircle />

          <GCText
            size={13}
            color={"black"}
            weight={700}
            className={classes.textPosition}
          >
            More Info
          </GCText>
        </div>

        <GCList size={12} listStyleType="none" className={classes.listSize}>
          <GCListItem className={classes.containerList}>
            <div>Minting Price</div>
            <div className={classes.listInformation}>{data.mintingPrice}</div>
          </GCListItem>
          <GCListItem className={classes.containerList}>
            <div> Collection</div>
            <div className={classes.listInformation}>{data.collection}</div>
          </GCListItem>
          <GCListItem className={classes.containerList}>
            <div>First Owner</div>
            <div className={classes.listInformation}>{data.firstOwner}</div>
          </GCListItem>
          <GCListItem className={classes.containerList}>
            <div>Rarity</div>
            <div className={classes.listInformation}>{data.rarity}</div>
          </GCListItem>
          <GCListItem className={classes.containerList}>
            <div>Creation Date </div>
            <div className={classes.listInformation}>{data.mintingDate}</div>
          </GCListItem>
        </GCList>
      </div>
    </div>
  );
};

export default NftCardInformation;
