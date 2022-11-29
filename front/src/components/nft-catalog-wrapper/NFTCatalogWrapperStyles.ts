import {createStyles} from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    card: {
        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            height: theme.breakpoints.xs / 1.9,
        },
    },
    catalog233: {
        height: theme.breakpoints.xs / 2,
    },
    catalog344: {
        height: theme.breakpoints.xs / 2.3,
        fontSize: theme.fontSizes.sm,
        whiteSpace: "pre",
    },

}));