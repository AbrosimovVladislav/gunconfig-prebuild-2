import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    page: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        margin: [`${theme.spacing.lg}px 0`],
        maxWidth: "100%",
    },

    catalogAndControls: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
    },

    controls: {
        display: "grid",
        gridTemplateColumns: "auto auto",
        gap: theme.spacing.md,
        justifyContent: "flex-end",
        alignItems: "center",
        width: "100%",

        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            display: "none",
        },
    },

    catalog: {
        display: "flex",
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        margin: [`${theme.spacing.md}px 0`],
        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            alignItems: "center",
        },
    }
}))