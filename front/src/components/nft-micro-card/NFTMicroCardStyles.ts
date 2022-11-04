import { createStyles } from "@mantine/core";
import { useColorScheme } from "@mantine/hooks";

export const useStyles = createStyles((theme) => ({
    card: {
        maxWidth: "350px",
        zIndex: 3,
        color: "#F9F9FB",
        padding: "0 !important",
        borderRadius: "8px",
        '&::after': {
            content: "''",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: "8px",
            backgroundImage: useColorScheme() === "light" ?
                "linear-gradient(0deg, rgba(89, 76, 117, 0.7) 8%, rgba(89, 76, 117, 0.4) 30%, rgba(158, 145, 184,  0) 70%)"
                :
                "linear-gradient(0deg, rgba(18, 14, 26, 0.7) 10.42%, rgba(18, 14, 26, 0.4) 28.65%, rgba(18, 14, 26, 0) 46.87%)"
        }
    },

    imageSection: {
        padding: 0,
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        minHeight: "300px",
    },

    image: {
        alignSelf: "flex-start",
        paddingTop: 0,
    },

    content: {
        zIndex: 1,
        position: "absolute",
        bottom: 0,
        left: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: "space-between",
        width: "100%",
        height: "35%",
        padding: "15px",
        borderRadius: useColorScheme() === "light" ? "8px" : 0,

    },

    label: {
        marginBottom: theme.spacing.xs,
        lineHeight: 1,
        fontWeight: 700,
        fontSize: theme.fontSizes.xs,
        letterSpacing: -0.25,
        textTransform: "uppercase",
    },

    section: {
        padding: theme.spacing.md,
        width: "100%",
        height: "10%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },

    icon: {
        marginRight: 5,
        color: theme.colorScheme === "dark" ? theme.colors.dark[2] : theme.colors.gray[5],
    },
}));
