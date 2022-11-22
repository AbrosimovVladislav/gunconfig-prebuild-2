import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    page: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        padding: theme.spacing.lg,
        maxWidth: theme.breakpoints.xl,
        margin: "0 auto",
        width: "100%",
    },

    catalogAndControls: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        width: "100%",
    },

    controls: {
        display: "grid",
        gridTemplateColumns: "auto",
        justifyContent: "center",
        alignItems: "flex-start",

        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            display: "none",
        },
    },

    catalog: {
        display: "flex",
        width: "100%",
        flexDirection: "column",
        alignItems: "flex-end",
        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            alignItems: "center",
        },
    }
}))