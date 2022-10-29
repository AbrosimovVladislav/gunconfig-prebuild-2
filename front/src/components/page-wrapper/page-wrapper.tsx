import React from "react";
import { links } from "../../consts/menu-links";
import Header from "../header/header";

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
