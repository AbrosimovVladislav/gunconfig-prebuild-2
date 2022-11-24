import { Container } from "@mantine/core";
import React, { ReactNode } from "react";
import { GCAccordion } from "./accordion/GCAccordion";

type Props = {
    children: ReactNode;
    className?: any;
};

export default function GCContainer({ children, className }: Props) {
    return (
        <Container size="xl" className={className}>
            {children}
        </Container>
    );
}

GCContainer.defaultProps = {
    className: {}
};

