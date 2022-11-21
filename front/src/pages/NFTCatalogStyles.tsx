import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    page: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        paddingTop: theme.spacing.lg,
    },
    catalog: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end"
    }
}))