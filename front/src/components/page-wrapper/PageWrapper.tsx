import React from "react";
import { links } from "../../consts/menu-links";
import HeaderSection from "../header/HeaderSection";

type PageWrapperProps = {
    children: JSX.Element;
};

const PageWrapper = ({ children }: PageWrapperProps) => {
    return (
        <div>
            <HeaderSection links={links} />
            {children}
        </div>
    );
};

export default PageWrapper;
