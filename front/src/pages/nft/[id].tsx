import React from "react";
import { useRouter } from "next/router";
import { useGetNFTById } from "../../services/nftService";
import { GCImage } from "../../gc-components";
import { GCGrid } from "../../gc-components/GCGrid";
import { GCGridCol } from "../../gc-components/GCGridCol";
import { useStyles } from "./SingleNFTPageStyles";
import NftCardInformation from "../../components/nft-card-information/NftCardInformation";


type SingleNFTPageProps = {};

const SingleNFTPage = (props: SingleNFTPageProps) => {
  const id: number = Number(useRouter().query.id);
  const [data, isLoading, isError, isSuccess] = useGetNFTById(id);
  const { classes } = useStyles();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  if (isSuccess) {
    return (
      <GCGrid className={classes.grid}>
        <GCGridCol sm={6} md={6}>
          <GCImage
            src={data.nftImageUrl}
            alt="gun"
            className={classes.nftImage}
          />
        </GCGridCol>
        <GCGridCol sm={6} md={6}>
          <NftCardInformation data={data}></NftCardInformation>
        </GCGridCol>
      </GCGrid>
    );
  }
};

export default SingleNFTPage;
