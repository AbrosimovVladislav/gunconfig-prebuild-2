import React from "react";
import { useRouter } from "next/router";
import {useGetNFTById} from "../../services/nftService";
import {GCImage} from "../../gc-components";
import {NFTCard} from "../../schema/NFTCatalogSchema";
import {GCGrid} from "../../gc-components/GCGrid";
import {GCGridCol} from "../../gc-components/GCGridCol";
import {useStyles} from "./SingleNFTPageStyles";

type SingleNFTPageProps = {
    data: NFTCard
};

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
        return <>
            <GCGrid className={classes.grid}>
                <GCGridCol sm={12} md={6}>
                    <GCImage src={data.nftImageUrl} alt="gun"/>
                </GCGridCol>
            </GCGrid>
        </>;
    }
};

export default SingleNFTPage;
