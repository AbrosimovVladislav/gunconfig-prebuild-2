import { createStyles } from "@mantine/core";

interface childGunComponentStylesProps {
    left: number,
    top: number,
    width: number,
}

export const useStyles = createStyles((theme, {left, top, width}: childGunComponentStylesProps) => ({
    absoluteWrapper: {
        position: "absolute",
        width: [`${width}px`],
        left: [`${left}%`],
        top: [`${top}%`],
        lineHeight: 0,
    },
    relativePlaceholder: {
        position: "relative",
    },
    image: {
        width: "100%",
        filter: "drop-shadow(0 30px 10px rgba(0, 0, 0, 0.3))",
        [`&:hover`]: {
            filter: [`drop-shadow(2px 0 2px rgba(94, 73, 225, 1)) drop-shadow(0 2px 2px rgba(94, 73, 225, 1)) drop-shadow(-2px 0 2px rgba(94, 73, 225, 1)) drop-shadow(0 -2px 2px rgba(94, 73, 225, 1)) drop-shadow(0 25px 10px rgba(0, 0, 0, 0.3))`]
        }
    }
}));