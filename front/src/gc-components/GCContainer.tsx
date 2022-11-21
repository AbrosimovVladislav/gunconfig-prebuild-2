import { Container } from "@mantine/core";
import React, { ReactNode } from "react";

type Props = {
    children: ReactNode;
    className?: any;
};

function GCContainer({ children, className }: Props) {
    return (
        <Container size="xl" className={className ?? {}}>
            {children}
        </Container>
    );
}

export default GCContainer;
