import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useGetNFTById } from "../../services/nftService";

type Props = {};

const SingleNFTPage = (props: Props) => {
    const id = useRouter().query.id;
    const [data, error, isLoading, isError] = useGetNFTById(id);

    useEffect(() => {
        console.log(data);
    }, [data]);

    return <div>NFT id: {id}</div>;
};

export default SingleNFTPage;
