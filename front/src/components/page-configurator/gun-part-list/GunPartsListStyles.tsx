import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    header: {
        margin: [`${theme.other.spacing.sm}px 0`],
    },

    carousel: {
        margin: [`${theme.other.spacing.xl}px 0`],
        overflowY: "auto",
    }
}));
