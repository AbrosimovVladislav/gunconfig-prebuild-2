import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme, _params, getRef) => ({
    card: {
        padding: "0 !important",
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
            background: "linear-gradient(180deg, rgba(153, 146, 168, 0) 13.54%, rgba(153, 102, 168, 0.05) 65.62%, rgba(153, 146, 168, 0.5) 100%)",
       },

        ":hover": {
            borderColor: "transparent",
            outline: [`1px solid ${theme.colors.primary[3]}`],
            outlineOffset: "-1px",
            borderRadius: "8px",
            [`& .${getRef("imageSection")}`]: {
                padding: 0,
            },
        },
    },

    imageSection: {
        ref: getRef("imageSection"),
        padding: theme.other.spacing.sm,
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        transition: "padding 0.3s",
    },

    content: {
        zIndex: 10,
        position: "absolute",
        bottom: 0,
        left: 0,
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: theme.other.spacing.xs,
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        padding: [`0 ${theme.other.spacing.lg}px ${theme.other.spacing.xs}px`],
        marginTop: "0 !important",
    },
}));
