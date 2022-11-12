import {Burger, BurgerProps, MantineNumberSize} from "@mantine/core";
import { MouseEventHandler } from "react";

interface GCBurgerProps extends BurgerProps{
    opened: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    size?: MantineNumberSize;
}

export const GCBurger = ({ opened, onClick, size, ...props }: GCBurgerProps) => {
    return <Burger opened={opened} onClick={onClick} size={size} {...props} />;
};
