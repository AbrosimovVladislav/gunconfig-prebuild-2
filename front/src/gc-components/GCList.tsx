import {DefaultMantineColor, List, MantineNumberSize} from "@mantine/core";
import {ReactNode } from "react";

interface GCListProps {
  children: ReactNode;
  size?: MantineNumberSize;
  color?: DefaultMantineColor;

}

export const GCList = ({size, color}: GCListProps) => {
  return (
    <List size={size} color={color}>
      <List.Item>{}</List.Item>
    </List>
  );
};