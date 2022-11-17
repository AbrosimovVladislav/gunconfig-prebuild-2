import { List } from "@mantine/core";
import { ReactNode } from "react";

interface GCListItemProps {
    children: ReactNode;
}

export const GCListItem = ({ children }: GCListItemProps) => {
    return <List.Item> {children}</List.Item>;
};
