import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    filter: {
        padding: "16px",
        boxShadow: theme.shadows.md,
        borderRadius: "8px",
        fontWeight: 700,
        fontSize: theme.fontSizes.sm,
        lineHeight: theme.lineHeight,
        backgroundColor: theme.colors.white[0],
    },
    filterItem: {
        border: "none",

    }
}))