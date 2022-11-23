import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    catalogOfFour: {
        display: "grid",
        gridTemplateColumns: "auto",
        gap: theme.spacing.md,
        justifyContent: "center",
        alignItems: "flex-start",

        [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
            gridTemplateColumns: "auto auto",
        },
        [`@media (min-width: ${theme.breakpoints.md}px)`]: {
            gridTemplateColumns: "auto auto",
        },
        [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
            gridTemplateColumns: "auto auto auto",
        },
        [`@media (min-width: ${theme.breakpoints.xl}px)`]: {
            gridTemplateColumns: "auto auto auto",
        },
    },
    catalogOfThree: {
        display: "grid",
        gridTemplateColumns: "auto",
        gap: theme.spacing.md,
        justifyContent: "center",
        alignItems: "flex-start",

        [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
            gridTemplateColumns: "auto auto",
        },
        [`@media (min-width: ${theme.breakpoints.md}px)`]: {
            gridTemplateColumns: "auto auto auto",
        },
        [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
            gridTemplateColumns: "auto auto auto auto",
        },
        [`@media (min-width: ${theme.breakpoints.xl}px)`]: {
            gridTemplateColumns: "auto auto auto auto",
        },
    },
}));
