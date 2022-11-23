import { GCList, GCListItem, GCText } from "../../gc-components";
import { NFTCard } from "../../schema/NFTCatalogSchema";
import { useStyles } from "./NftCardInformationStyle";
// import {ReactComponent as Picture} from './assets/img/photoImg.svg';

interface NftCardInformationProps {
  data: NFTCard;
}

const NftCardInformation = ({ data }: NftCardInformationProps) => {
  const { classes } = useStyles();

  return (
    <div>
      <GCText weight={700} size={25} color={"#494B4D"}>
        {data.name}
      </GCText>

      <div className={classes.collectionText}>
        <GCText weight={400} size={15} color={"#494B4D"}>
          Collection:
        </GCText>
      </div>

      <div className={classes.panel}>
        {/* <Picture/>  */}
        <div className={classes.imageBox}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.5 10C9.32843 10 10 9.32843 10 8.5C10 7.67157 9.32843 7 8.5 7C7.67157 7 7 7.67157 7 8.5C7 9.32843 7.67157 10 8.5 10Z"
              stroke="#7666D7"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4 5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5V12.5858L16.7071 9.29289C16.3166 8.90237 15.6834 8.90237 15.2929 9.29289L4.64909 19.9367C4.2699 19.7946 4 19.4288 4 19V5ZM5.00098 22H5H5.00098ZM5.00098 22H19C20.6569 22 22 20.6569 22 19V15.001C22 15.0003 22 14.9997 22 14.999V5C22 3.34315 20.6569 2 19 2H5C3.34315 2 2 3.34315 2 5V19C2 20.6565 3.3425 21.9994 4.9988 22M20 15.4142V19C20 19.5523 19.5523 20 19 20H7.41421L16 11.4142L20 15.4142Z"
              fill="#7666D7"
            />
          </svg>
          <GCText
            size={13}
            color={"#333333"}
            weight={700}
            className={classes.textPosition}
          >
            About the Build
          </GCText>
        </div>

        <GCText
          size={12}
          color={"#333333"}
          weight={400}
          className={classes.gunDes}
        >
          {data.gunDescription}
        </GCText>
      </div>

      <div className={`${classes.panel} ${classes.panel2}`}>
        <div className={classes.imageBox}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
              stroke="#7666D7"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <GCText size={13} color={"#333333"} weight={700} className={classes.textPosition}>
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
          {/* <GCListItem className={classes.containerList}>
              <div>Creation Date </div>
                <div className={classes.listInformation}>{data.mintingDate}</div>
          </GCListItem> */}
        </GCList>
      </div>
    </div>
  );
};

export default NftCardInformation;
