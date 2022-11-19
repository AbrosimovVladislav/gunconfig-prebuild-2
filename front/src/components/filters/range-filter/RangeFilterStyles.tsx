import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    filter: {
        display: "grid",
        gridTemplateColumns: "auto auto",
        gap: "5px",
        margin: [`${theme.spacing.sm}px 0 0`],
        maxWidth: "100%",
        fontWeight: 400,
    },
}))