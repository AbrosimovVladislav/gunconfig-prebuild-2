import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    card: {
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
        padding: "0 !important",
        maxWidth: "343px",
        maxHeight: "400px",
        minHeight: "300px",

        '&::after': {
            content: "''",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: "8px"
        }
    },

    imageSection: {
        padding: "10px 15px",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        minHeight: "248px",
    },

    content: {
        zIndex: 1,
        position: "absolute",
        bottom: 0,
        left: 0,
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
        width: "100%",
        padding: "24px",
        paddingBottom: "10px",
        paddingTop: "0",
        marginTop: "0 !important"
    }
}));