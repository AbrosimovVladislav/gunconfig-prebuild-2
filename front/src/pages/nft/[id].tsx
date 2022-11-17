import { useRouter } from "next/router";
import React from "react";
import { GCList } from "../../gc-components";

type Props = {};

const SingleNFTPage = (props: Props) => {
    const id: number = Number(useRouter().query.id);


    return <>
    <GCList></GCList>
    </>
    };

export default SingleNFTPage;
