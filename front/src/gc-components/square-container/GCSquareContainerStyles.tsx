import { createStyles } from "@mantine/core";

export const useStyles = createStyles(() => ({
    square: {
        position: "relative",
        width: "100%",
        "&::after": {
            content: "''",
            display: "block",
            paddingBottom: "80%",
        },
    },
    content: {
        position: "absolute",
        width: "80%",
        height: "80%",
        margin: "auto",
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
}));