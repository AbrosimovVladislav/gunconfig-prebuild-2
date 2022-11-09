import { ReactNode } from "react";
import {Card, CardProps} from "@mantine/core";
import { MantineNumberSize } from "@mantine/styles";

interface GCCardProps extends CardProps{
    children: ReactNode;
    withBorder?: boolean;
    radius?: MantineNumberSize;
    className?: string;
}

export const GCCard = ({ children, withBorder, radius, className, ...props }: GCCardProps) => {
    return (
        <Card withBorder={withBorder} radius={radius} className={className} {...props}>
            {children}
        </Card>
    );
};
