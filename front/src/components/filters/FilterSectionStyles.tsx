import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    section: {
        display: "grid",
        gridTemplateColumns: "280px",
        gridGap: "16px",
        margin: "20px 16px",
    },
    filter: {
        padding: "16px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.04)",
        borderRadius: "8px",
        fontWeight: 700,
        fontSize: theme.fontSizes.sm,
        lineHeight: theme.lineHeight,

    },
    filterItem: {
        border: "none",
    }
}))