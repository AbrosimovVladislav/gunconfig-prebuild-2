import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    button: {
        borderRadius: "50%",
        boxShadow: theme.shadows.sm,
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.colors.neutralLight[4],
    },
    buttonPrimary: {
        backgroundColor: theme.fn.primaryColor()
    },
    sm: {
        width: "32px",
        height: "32px",
    },
    md: {
        width: "44px",
        height: "44px",
    },
    lg: {
        width: "52px",
        height: "52px",
    },
    center: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: theme.spacing.md,
        // position: "absolute",
        zIndex: 10,
    },
    top: {
        display: "flex",
        alignItems: "flex-start",
        // position: "absolute",
        zIndex: 10,
    },
    bottom: {
        display: "flex",
        alignItems: "flex-end",
        // position: "absolute",
        zIndex: 10,
    },
    left: {
        display: "flex",
        justifyContent: "flex-start",
        // position: "absolute",
        zIndex: 10,
    },
    right: {
        display: "flex",
        justifyContent: "flex-end",
        // position: "absolute",
        zIndex: 10,
    }
}))