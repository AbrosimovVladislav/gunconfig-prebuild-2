import { ReactNode } from "react";
import { Card } from "@mantine/core";

interface GCCardSectionProps {
    children: ReactNode;
    className?: string;
}

export const GCCardSection = ({ children, className }: GCCardSectionProps) => {
    return <Card.Section className={className}>{children}</Card.Section>;
};
