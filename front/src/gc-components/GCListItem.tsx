import { List, ListItemProps } from "@mantine/core";
import { ReactNode } from "react";

interface GCListItemProps extends ListItemProps {
  key?: string | number | null | undefined;
  children: ReactNode;
}

export const GCListItem = ({ children, ...props }: GCListItemProps) => {
  return <List.Item {...props}> {children}</List.Item>;
};
