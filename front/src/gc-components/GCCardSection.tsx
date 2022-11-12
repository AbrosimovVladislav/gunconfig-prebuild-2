import { ReactNode } from "react";
import {Card, CardProps} from "@mantine/core";

interface GCCardSectionProps extends CardProps{
    children: ReactNode;
    className?: string;
}

export const GCCardSection = ({ children, className, ...props }: GCCardSectionProps) => {
    return <Card.Section className={className} {...props}>{children}</Card.Section>;
};
