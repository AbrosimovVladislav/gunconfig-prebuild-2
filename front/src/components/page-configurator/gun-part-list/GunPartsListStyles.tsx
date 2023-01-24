import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    header: {
        margin: [`${theme.spacing.sm}px 0`],
    },

    carousel: {
        margin: [`${theme.spacing.xl}px 0`],
        overflowY: "auto",
    }
}));
