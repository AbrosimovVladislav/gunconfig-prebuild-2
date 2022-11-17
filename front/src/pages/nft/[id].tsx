import React from "react";
import { useRouter } from "next/router";
import { useGetNFTById } from "../../services/nftService";
import { GCImage, GCList, GCListItem, GCText } from "../../gc-components";
import { GCGrid } from "../../gc-components/GCGrid";
import { GCGridCol } from "../../gc-components/GCGridCol";
import { useStyles } from "./SingleNFTPageStyles";

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
            <>
                <GCGrid className={classes.grid}>
                    <GCGridCol sm={12} md={12} className={classes.gridPosition}>
                        <div className={classes.nftImage}>
                            <GCImage src={data.nftImageUrl} alt="gun" />
                        </div>
                        <div className={classes.container}>
                            <GCText size={20} className={classes.textBold}>
                                {data.name}
                            </GCText>
                            <GCText className={classes.priceText}>Price: {data.mintingPrice}</GCText>
                            <div className={classes.listSize}>
                                <GCList size={12}>
                                    <GCListItem>{data.mintingDate}</GCListItem>
                                    <GCListItem>{data.rarity}</GCListItem>
                                    <GCListItem>{data.collection}</GCListItem>
                                    <GCListItem>{data.firstOwner}</GCListItem>
                                </GCList>
                            </div>
                            <div className={classes.textDescription}>Description:</div>

                            <GCText size={12}>{data.gunDescription}</GCText>
                        </div>
                    </GCGridCol>
                </GCGrid>
            </>
        );
    }
};

export default SingleNFTPage;
