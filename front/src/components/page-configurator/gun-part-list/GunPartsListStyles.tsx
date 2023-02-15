import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    header: {
        margin: [`${theme.other.spacing.sm}px 0`],
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },

    search: {
        [`@media (min-width: ${theme.other.breakpoints.tablet}px)`]: {
            margin: [`0 ${theme.other.spacing.xxl}px`]
        },
    },

    carousel: {
        margin: [`${theme.other.spacing.xl}px 0`],
        overflowY: "auto",
    }
}));
