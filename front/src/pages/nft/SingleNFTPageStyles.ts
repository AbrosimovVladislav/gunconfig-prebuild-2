import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    grid: {
        padding: [`0 ${theme.spacing.xl}px 0 ${theme.spacing.xl}px`],
    },

    position: {
        display: "flex",
    },

    nftImage: {
        width: "50%",
    },

    positionText: {
        width: "50%",
        padding: "25px",
    },

    listSize: {
        marginTop: "10px",
    },
}));
