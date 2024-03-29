import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    section: {
        display: "grid",
        gridTemplateColumns: "280px",
        gridGap: "16px",
        margin: [`0 ${theme.other.spacing.md}px ${theme.other.spacing.md}px 0`],
        [`@media (max-width: ${theme.other.breakpoints.laptopS}px)`]: {
            display: "none",
        },
    },

    filter: {
        padding: theme.other.spacing.md,
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