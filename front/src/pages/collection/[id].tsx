import { useRouter } from "next/router";
import React from "react";

type Props = {};

const SingleCollectionPage = (props: Props) => {
    const router = useRouter();
    console.log(router.query.gun);
    console.log(router.query.stock);

    return <div>Collection ID: {router.query.id}</div>;
};

export default SingleCollectionPage;
