import React from "react";
import { links } from "../../../consts/menu-links";
import HeaderSection from "../../header/HeaderSection";
import GCContainer from "../../../gc-components/container/GCContainer";

type PageWrapperProps = {
    children: JSX.Element;
};

const PageWrapper = ({ children }: PageWrapperProps) => {
    return (
        <GCContainer>
            <HeaderSection links={links} />
            {children}
        </GCContainer>
    );
};

export default PageWrapper;
