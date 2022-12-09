import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    button: {
        borderRadius: "50%",
        boxShadow: theme.shadows.sm,
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "& svg": {

        }
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
        padding: theme.spacing.md,
    },
    top: {
        paddingTop: theme.spacing.md,
        display: "flex",
        alignItems: "flex-start"
    },
    bottom: {
        paddingBottom: theme.spacing.md,
        display: "flex",
        alignItems: "flex-end"
    },
    left: {
        paddingLeft: theme.spacing.md,
        display: "flex",
        justifyContent: "flex-start"
    },
    right: {
        paddingRight: theme.spacing.md,
        display: "flex",
        justifyContent: "flex-end"
    }
}))