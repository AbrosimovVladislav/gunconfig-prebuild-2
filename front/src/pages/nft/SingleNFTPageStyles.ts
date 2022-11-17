import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    grid: {
        padding: [`0 ${theme.spacing.xl}px 0 ${theme.spacing.xl}px`],
    },

    gridPosition: {
        display: "flex",
    },

    nftImage: {
        width: "50%",
    },

    container: {
        width: "50%",
        padding: "25px",
    },

    listSize: {
        margin: "20px 0 20px;",
    },

    textBold: {
        fontWeight: 500,
    },

    priceText: {
        marginTop: "10px",
        fontWeight: 400,
    },

    textDescription: {
        marginBottom: "10px",
    },
}));
