import React from "react";
import { useRouter } from "next/router";
import { useGetNFTById, getNFTsByCollection } from "../../services/nftService";
import { GCImage, GCText } from "../../gc-components";
import { GCGrid } from "../../gc-components/GCGrid";
import { GCGridCol } from "../../gc-components/GCGridCol";
import { useStyles } from "./SingleNFTPageStyles";
import NftCardInformation
    from "../../components/page-single-nft/nft-card-information/NftCardInformation";
import Catalog from "../../components/common/catalog/Catalog";
import GunPartCard from "../../components/common/gun-part-card/GunPartCard";
import NftCarousel from "../../components/page-single-nft/nft-carousel/NftCarousel";
import { Product } from "../../schema/common/Product";

type SingleNFTPageProps = {};

const SingleNFTPage = (props: SingleNFTPageProps) => {
    const id: number = Number(useRouter().query.id);
    const { data: nftInfo, isLoading, isError, isSuccess } = useGetNFTById(id);
    const { nftsByCollection } = getNFTsByCollection(nftInfo?.collection);
    const { classes } = useStyles();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error</div>;
    }

    if (isSuccess) {
        return (
            <>
                <div className={classes.nftContainer}>
                    <div className={classes.nftWrapper}>
                        <GCImage className={classes.nftImage} src={nftInfo?.nftImageUrl}
                                 alt="gun" />
                    </div>
                    <NftCardInformation data={nftInfo} />
                </div>
                <GCGrid>
                    <GCGridCol sm={12} md={12}>
                        <GCText className={classes.header} h2 bold>
                            What was used in this build
                        </GCText>
                        <Catalog>
                            {nftInfo?.properties?.map((product: Product) => (
                                <GunPartCard product={product} key={product.productId} />
                            ))}
                        </Catalog>
                    </GCGridCol>
                </GCGrid>
                <NftCarousel data={nftsByCollection} header={"More from this collection"} />
            </>
        );
    }
};

export default SingleNFTPage;
