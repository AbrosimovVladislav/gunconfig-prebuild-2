import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    canvas: {
        height: "300px",
        width: "100%",
        boxShadow: theme.shadows.md,
        borderRadius: "8px",
        display: "grid",
        placeItems: "center",
    },
    root: {
        position: "relative",
        maxWidth: "40%",
        left: "10%",
        top: "-10%",
    }
}));