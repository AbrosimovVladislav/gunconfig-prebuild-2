import { createStyles } from "@mantine/core";

export const useStyles = createStyles(() => ({
    square: {
        position: "relative",
        width: "100%",
        "&::after": {
            content: "''",
            display: "block",
            paddingBottom: "100%",
        },
    },
    content: {
        position: "absolute",
        width: "100%",
        height: "100%",
        margin: "auto",
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
}));