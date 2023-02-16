import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    catalog: {
        display: "grid",
        width: "100%",
        gridTemplateColumns: "1fr",
        gap: theme.other.spacing.md,
        justifyContent: "center",
        alignItems: "flex-start",
        [`@media (min-width: ${theme.other.breakpoints.mobileL}px)`]: {
            gridTemplateColumns: "1fr 1fr",
        },
    },

    catalog233: {
        [`@media (min-width: ${theme.other.breakpoints.tablet}px)`]: {
            gridTemplateColumns: "1fr 1fr",
        },
        [`@media (min-width: ${theme.other.breakpoints.laptopM}px)`]: {
            gridTemplateColumns: "1fr 1fr 1fr",
        },
        [`@media (min-width: ${theme.other.breakpoints.laptopL}px)`]: {
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
        },
        [`@media (min-width: ${theme.other.breakpoints.laptopXL}px)`]: {
            gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
        },
        [`@media (min-width: ${theme.other.breakpoints.laptopXXL}px)`]: {
            gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
        },
    },

    catalog344: {
        [`@media (min-width: ${theme.other.breakpoints.tablet}px)`]: {
            gridTemplateColumns: "1fr 1fr 1fr",
        },
        [`@media (min-width: ${theme.other.breakpoints.laptopS}px)`]: {
            gridTemplateColumns: "1fr 1fr 1fr",
        },
        [`@media (min-width: ${theme.other.breakpoints.laptopM}px)`]: {
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
        },
        [`@media (min-width: ${theme.other.breakpoints.laptopL}px)`]: {
            gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
        },
        [`@media (min-width: ${theme.other.breakpoints.laptopXL}px)`]: {
            gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
        },
        [`@media (min-width: ${theme.other.breakpoints.laptopXXL}px)`]: {
            gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
        },
    },
}));
