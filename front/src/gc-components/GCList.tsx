import { DefaultMantineColor, List, MantineNumberSize } from "@mantine/core";
import { ReactNode } from "react";

interface GCListProps {
    children: ReactNode;
    size?: MantineNumberSize;
    color?: DefaultMantineColor;
}

export const GCList = ({ size, color, children }: GCListProps) => {
    return (
        <List size={size} color={color}>
            {children}
        </List>
    );
};
