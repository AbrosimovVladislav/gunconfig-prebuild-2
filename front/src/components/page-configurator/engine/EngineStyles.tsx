import {createStyles} from "@mantine/core";

interface engineStylesProps {
    rootGunWidth: number,
}

export const useStyles = createStyles((theme, {rootGunWidth}: engineStylesProps) => ({
    canvas: {
        width: "100%",
        boxShadow: theme.shadows.xl,
        borderRadius: theme.other.spacing.xxs,
        display: "grid",
        placeItems: "center",
        height: [`${rootGunWidth * theme.other.configuratorEngineRatios.boxHeightFactorMobileAndTablet}px`],
        [`@media (min-width: ${theme.other.breakpoints.laptopS}px)`]: {
            height: [`${rootGunWidth * theme.other.configuratorEngineRatios.boxHeightFactorLaptop}px`],
        }

    },
    rootGunWrapper: {
        position: "relative",
        maxWidth: [`${rootGunWidth}px`],
        left: "10%",
        top: "-13%",
    }
}));
