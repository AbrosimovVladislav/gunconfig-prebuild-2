import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    header: {
        margin: [`${theme.other.spacing.xl}px 0 ${theme.other.spacing.sm}px`],
    },

    carousel: {
        margin: [`${theme.other.spacing.xl}px 0`],
    }
}));
