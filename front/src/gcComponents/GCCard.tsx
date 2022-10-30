import { ReactNode } from "react";
import { Card } from "@mantine/core";
import { MantineNumberSize } from "@mantine/styles";

interface GCCardProps {
    children: ReactNode;
    withBorder?: boolean;
    radius?: MantineNumberSize;
    className?: string;
}

export const GCCard = ({ children, withBorder, radius, className }: GCCardProps) => {
    return (
        <Card withBorder={withBorder} radius={radius} className={className}>
            {children}
        </Card>
    );
};
