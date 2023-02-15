import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    box: {
        display: "flex",
        justifyContent: "center",
        padding: [`${theme.spacing.sm}px 0`],
        position: "relative",
    },

    engine: {
        position: "relative",
        width: "100%",
    },
}));
