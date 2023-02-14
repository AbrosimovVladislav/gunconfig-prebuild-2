import { createStyles } from "@mantine/core";

interface engineStylesProps {
    rootGunWidth: number,
}

export const useStyles = createStyles((theme, {rootGunWidth}: engineStylesProps) => ({
    canvas: {
        height: [`${rootGunWidth * theme.other.configuratorEngineRatios.boxHeightFactor}px`],
        width: "100%",
        boxShadow: theme.shadows.xl,
        borderRadius: theme.other.spacing.xxs,
        display: "grid",
        placeItems: "center"
    },
    rootGunWrapper: {
        position: "relative",
        maxWidth: [`${rootGunWidth}px`],
        left: "10%",
        top: "-13%",
    }
}));
