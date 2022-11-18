import { List } from "@mantine/core";
import { ReactNode } from "react";

interface GCListItemProps {
    children: ReactNode;
}

export const GCListItem = ({ children, ...props }: GCListItemProps) => {
    return <List.Item {...props}> {children}</List.Item>;
};
