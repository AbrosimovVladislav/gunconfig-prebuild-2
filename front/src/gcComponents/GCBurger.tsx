import { Burger, MantineNumberSize } from "@mantine/core";
import { MouseEventHandler } from "react";

interface GCBurgerProps {
    opened: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    size?: MantineNumberSize;
}

export const GCBurger = ({ opened, onClick, size }: GCBurgerProps) => {
    return <Burger opened={opened} onClick={onClick} size={size} />;
};
