import { useRouter } from "next/router";
import React from "react";

type Props = {};

const SingleNFTPage = (props: Props) => {
    const id = useRouter().query.id;

    return <div>NFT id: {id}</div>;
};

export default SingleNFTPage;
