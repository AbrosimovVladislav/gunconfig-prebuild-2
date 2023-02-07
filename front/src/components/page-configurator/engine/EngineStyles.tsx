import { createStyles } from "@mantine/core";

interface engineStylesProps {
    width: number,
}

export const useStyles = createStyles((theme, {width}: engineStylesProps) => ({
    canvas: {
        height: "40vh",
        width: "100%",
        boxShadow: theme.shadows.xl,
        borderRadius: theme.other.spacing.xxs,
        display: "grid",
        placeItems: "center",
        [`@media (min-width: ${theme.other.breakpoints.laptopL}px)`]: {
            height: [`${width / 2}px`],
        }
    },
    root: {
        position: "relative",
        maxWidth: [`${width}px`],
        left: "10%",
        top: "-10%",
    }
}));
