import { DefaultMantineColor, List, MantineNumberSize } from "@mantine/core";
import { ReactNode } from "react";

interface GCListProps {
    key?: string | number | null | undefined;
    children: ReactNode;
    size?: MantineNumberSize;
}

export const GCList = ({ size, children, ...props }: GCListProps) => {
    return (
        <List size={size} {...props}>
            {children}
        </List>
    );
};
