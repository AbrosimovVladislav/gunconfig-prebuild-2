import { ReactNode } from "react";
import { Header } from "@mantine/core";

interface GCHeaderProps {
    children: ReactNode;
    height: number;
    className?: string;
    mb?: number;
}

export const GCHeader = ({ children, height, className, mb }: GCHeaderProps) => {
    return (
        <Header height={height} className={className} mb={mb}>
            {children}
        </Header>
    );
};
