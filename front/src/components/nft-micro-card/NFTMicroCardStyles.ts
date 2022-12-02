import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme, _params, getRef) => ({
    card: {
        padding: "0 !important",
        maxWidth: "343px",
        height: "inherit",
        margin: "auto",
        border: "none",
        boxShadow: theme.shadows.md,

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
            outline: [`1px solid ${theme.colors.primary[3]}`],
            borderRadius: "8px",

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
        gap: theme.spacing.xs,
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        padding: [`0 ${theme.spacing.lg}px ${theme.spacing.xs}px`],
        marginTop: "0 !important",
    },
}));
