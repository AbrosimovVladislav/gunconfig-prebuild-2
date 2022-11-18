import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    section: {
        display: "grid",
        gridTemplateColumns: "280px",
        gridGap: "16px",
        margin: [`${theme.spacing.lg}px ${theme.spacing.md}px ${theme.spacing.md}px 0`],
        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            display: "none",
        },
    },

    filter: {
        padding: theme.spacing.md,
        boxShadow: theme.shadows.md,
        borderRadius: "8px",
        fontWeight: 700,
        fontSize: theme.fontSizes.sm,
        lineHeight: theme.lineHeight,
    },

    filterItem: {
        border: "none",
    }
}))