import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme, _params, getRef) => ({
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
            gridTemplateColumns: "auto auto",
        },
        [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
            gridTemplateColumns: "auto auto auto",
        },
        [`@media (min-width: ${theme.breakpoints.xl}px)`]: {
            gridTemplateColumns: "auto auto auto",
        },

        [`& .${getRef("card")}`]: {
            height: theme.breakpoints.xs / 2,
        }
    },
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
            gridTemplateColumns: "auto auto auto",
        },
        [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
            gridTemplateColumns: "auto auto auto auto",
        },
        [`@media (min-width: ${theme.breakpoints.xl}px)`]: {
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
        },

        [`& .${getRef("card")}`]: {
            height: theme.breakpoints.xs / 2.2,
            fontSize: theme.fontSizes.sm,
            whiteSpace: "pre",
        },
    },
    card: {
        ref: getRef("card"),
    }
}));
