import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    listSize: {
        margin: [`20px 0 ${theme.spacing.xl}px`],
    },

    priceText: {
        marginTop: "10px",
    },

    textDescription: {
        marginBottom: "10px",
    },
}));
