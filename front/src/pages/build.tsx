import { useRouter } from "next/router";
import React from "react";

type Props = {};

const Build = (props: Props) => {
    const route = useRouter();
    return (
        <div>
            <h1>Build</h1>

            <ul>
                <li>Gun ID: {route.query.gun}</li>
            </ul>
        </div>
    );
};

export default Build;
