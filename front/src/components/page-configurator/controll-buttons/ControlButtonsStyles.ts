import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    box: {
        display: "flex",
        justifyContent: "center",
        padding: [`${theme.other.spacing.md}px 0`],
        position: "relative",
    },

    engine: {
        position: "relative",
        width: "100%",
    },

    actions: {
        position: "absolute",
        width: "100%",
        height: "100%",
        display: "grid",
        placeItems: "flex-end",
        gridTemplateColumns: "max-content max-content max-content",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        padding: [`${theme.other.spacing.md}px 0`],
    },

    iconTop: {
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        marginTop: [`-${theme.other.spacing.md}px`],
        marginLeft: [`-${theme.other.spacing.lg}px`],
    },

    iconBottom: {
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        alignSelf: "flex-end",
        justifySelf: "flex-end",
        gridArea: "2 / 3 / 2 / 3",
        marginBottom: [`${theme.other.spacing.md}px`],
        marginLeft: [`-${theme.other.spacing.lg}px`],
    },
}));
