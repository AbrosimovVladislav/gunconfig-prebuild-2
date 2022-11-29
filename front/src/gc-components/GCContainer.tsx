import { Container } from "@mantine/core";
import React, { ReactNode } from "react";

type Props = {
    children: ReactNode;
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    className?: any;
};

export default function GCContainer({ children, size, className }: Props) {
    return (
        <Container size={size} className={className}>
            {children}
        </Container>
    );
}

GCContainer.defaultProps = {
    className: {},
    size: "xl"
};

