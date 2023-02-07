import { createStyles } from "@mantine/core";

interface engineStylesProps {
    width: number,
}

export const useStyles = createStyles((theme, {width}: engineStylesProps) => ({
    canvas: {
        height: [`${width / 1.3}px`],
        width: "100%",
        boxShadow: theme.shadows.xl,
        borderRadius: theme.other.spacing.xxs,
        display: "grid",
        placeItems: "center",
        [`@media (min-width: ${theme.other.breakpoints.laptopM}px)`]: {
            height: [`${width / 1.7}px`],
        },
    },
    root: {
        position: "relative",
        maxWidth: [`${width}px`],
        left: "10%",
        top: "-15%",
    }
}));
