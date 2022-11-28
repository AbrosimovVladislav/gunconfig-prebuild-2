import React from "react";
import { useRouter } from "next/router";
import { useGetNFTById } from "../../services/nftService";
import {GCImage, GCText} from "../../gc-components";
import { GCGrid } from "../../gc-components/GCGrid";
import { GCGridCol } from "../../gc-components/GCGridCol";
import { useStyles } from "./SingleNFTPageStyles";
import NftCardInformation from "../../components/nft-card-information/NftCardInformation";
import Catalog from "../../components/catalog/Catalog";
import { Product } from "../../schema/NFTCatalogSchema";
import GunPartCard from "../../components/gun-part-card/GunPartCard";
import GCContainer from "../../gc-components/GCContainer";

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
            <GCContainer>
                <GCGrid className={classes.grid}>
                    <GCGridCol sm={6} md={6}>
                        <GCImage src={data.nftImageUrl} alt="gun" />
                    </GCGridCol>
                    <GCGridCol sm={6} md={6}>
                        <NftCardInformation data={data}></NftCardInformation>
                    </GCGridCol>
                    <GCGridCol sm={12} md={12}>
                        <GCText className={classes.catalogHeader} size="xl" weight={700}>
                            What was used in this build
                        </GCText>
                        <Catalog>
                            {data.properties.map((product: Product) => (
                                <GunPartCard product={product} key={product.productId} />
                            ))}
                        </Catalog>
                    </GCGridCol>
                </GCGrid>
            </GCContainer>
    );
  }
};

export default SingleNFTPage;
