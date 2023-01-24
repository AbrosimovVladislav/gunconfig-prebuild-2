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
        [`&:hover`]: {
            filter: "drop-shadow(2px 0 2px red) drop-shadow(0 2px 2px red) drop-shadow(-2px 0 2px red) drop-shadow(0 -2px 2px red)"
        }
    },
    image: {
        width: "100%"
    }
}));