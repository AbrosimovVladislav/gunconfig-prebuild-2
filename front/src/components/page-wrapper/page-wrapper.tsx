import React from "react";
import { Header } from "../header";
import { links } from "../../consts/menu-links";

type Props = {
    children: JSX.Element;
};

const PageWrapper = ({ children }: Props) => {
    return (
        <div>
            <Header links={links} />
            {children}
        </div>
    );
};

export default PageWrapper;
