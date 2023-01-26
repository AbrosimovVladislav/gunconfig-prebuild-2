import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    box: {
        display: "flex",
        justifyContent: "center",
        padding: [`${theme.spacing.md}px 0`],
        position: "relative",
    },

    actions: {
        position: "absolute",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        padding: [`${theme.spacing.md}px 0`],
    },


    icon: {
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        marginTop: [`-${theme.spacing.md}px`],
        "& + &": {
            marginLeft: [`-${theme.spacing.lg}px`],
        },
    },
}));