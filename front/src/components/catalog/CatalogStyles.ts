import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    catalog: {
        display: "grid",
        width: "100%",
        gridTemplateColumns: "1fr",
        gap: theme.spacing.md,
        justifyContent: "center",
        alignItems: "flex-start",
        [`@media (min-width: ${theme.breakpoints.xs}px)`]: {
            gridTemplateColumns: "1fr 1fr",
        },
    },

    catalog233: {
        [`@media (min-width: ${theme.breakpoints.md}px)`]: {
            gridTemplateColumns: "1fr 1fr",
        },
        [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
            gridTemplateColumns: "1fr 1fr 1fr",
        },
        [`@media (min-width: ${theme.breakpoints.xl}px)`]: {
            gridTemplateColumns: "1fr 1fr 1fr",
        },
    },

    catalog344: {
        [`@media (min-width: ${theme.breakpoints.md}px)`]: {
            gridTemplateColumns: "1fr 1fr 1fr",
        },
        [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
        },
        [`@media (min-width: ${theme.breakpoints.xl}px)`]: {
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
        },
    },
}));
