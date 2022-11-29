import { ReactNode } from "react";
import {Header, HeaderProps} from "@mantine/core";

interface GCHeaderProps extends HeaderProps{
    children: ReactNode;
    height: number;
    className?: string;
    mb?: number;
}

export const GCHeader = ({ children, height, className, mb, ...props }: GCHeaderProps) => {
    return (
        <Header height={height} className={className} mb={mb} style={{backgroundColor: "transparent"}} {...props}>
            {children}
        </Header>
    );
};
