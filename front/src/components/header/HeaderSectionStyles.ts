import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    header: {
        paddingLeft: theme.other.spacing.md,
        paddingRight: theme.other.spacing.md,
        marginBottom: "0px !important",
        border: "none"
    },

    inner: {
        height: 70,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },

    logo: {
        maxWidth: "60px",
    },

    links: {
        [theme.fn.smallerThan("md")]: {
            display: "none",
        },
    },

    search: {
        [theme.fn.smallerThan("xs")]: {
            display: "none",
        },
    },

    link: {
        display: "block",
        lineHeight: 1,
        padding: "8px 12px",
        borderRadius: theme.radius.sm,
        textDecoration: "none",
        color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[7],
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,

        "&:hover": {
            backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
        },
    },
}));
