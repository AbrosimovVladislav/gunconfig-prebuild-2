import { List, ListItemProps } from "@mantine/core";
import { ReactNode } from "react";

interface GCListItemProps extends ListItemProps {
  key?: string | number | null | undefined;
  children: ReactNode;
  className?: string;
}

export const GCListItem = ({ children, className, ...props }: GCListItemProps) => {
  return <List.Item {...props} className={className}> {children}</List.Item>;
};
