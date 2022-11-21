import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme, _params, getRef) => ({
    card: {
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
        padding: "0 !important",
        maxWidth: "343px",
        maxHeight: "400px",
        minHeight: "300px",
        margin: "auto",

        "&::after": {
            content: "''",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: "8px",
        },

        ":hover": {
            borderColor: "transparent",
            outline: "1px solid #7B61FF",
            borderRadius: "8px",
            boxShadow: theme.shadows.md,

            [`& .${getRef("imageSection")}`]: {
                padding: 0,
            },
        },
    },

    imageSection: {
        ref: getRef("imageSection"),
        padding: "10px 15px",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        minHeight: "248px",
        transition: "padding 0.3s",
    },

    content: {
        zIndex: 1,
        position: "absolute",
        bottom: 0,
        left: 0,
        display: "grid",
        gridTemplateColumns: "auto auto",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        padding: "0 24px 10px",
        marginTop: "0 !important",
    },
}));
