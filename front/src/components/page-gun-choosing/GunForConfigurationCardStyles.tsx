import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme, _params, getRef) => ({
    card: {
        boxShadow: theme.shadows.lg,
        border: "none",
        height: "100%",
        width: "100%",
        padding: "0 !important",
        "&::after": {
            content: "''",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: "8px",
            background: "linear-gradient(180deg, rgba(26, 22, 34, 0) 0%, rgba(26, 22, 34, 0) 64.06%, rgba(26, 22, 34, 0.7) 100%);",
        },
        ":hover": {
            borderColor: "transparent",
            outline: [`1px solid ${theme.colors.primary[3]}`],
            borderRadius: "8px",
            [`& .${getRef("imageSection")}`]: {
                padding: [`-${theme.other.spacing.sm}px`],
            },
        },
    },
    imageSection: {
        ref: getRef("imageSection"),
        height: "100%",
        width: "100%",
        margin: 0,
        objectFit: "cover",
        padding: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "padding 0.3s",
    },

    image: {
        height: "100%",
        width: "100%",
        minHeight: "250px",
        maxHeight: "300px",
        objectFit: "cover",
        overflow: "hidden",
        display: "flex",
        margin: 0,
    },

    content : {
        position: "absolute",
        top: "80%",
        left: theme.spacing.md,
        zIndex: 1,
    },
}));