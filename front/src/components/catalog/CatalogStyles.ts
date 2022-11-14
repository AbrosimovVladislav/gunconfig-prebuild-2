import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    page: {
        display: "grid",
        grid: "'filters catalog'",
        justifyContent: "center",
        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            grid: "'catalog'",
        },
    },

    filters: {
        gridArea: "filters",
        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            display: "none",
        },
    },

    catalog: {
        display: "grid",
        gridArea: "catalog",
        gridTemplateColumns: "auto",
        justifyContent: "center",

        [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
            gridTemplateColumns: "auto auto",
            margin: "0 -10px",
        },
        [`@media (min-width: ${theme.breakpoints.md}px)`]: {
            gridTemplateColumns: "auto auto auto",
        },
        [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
            gridTemplateColumns: "auto auto auto",
        },
        [`@media (min-width: ${theme.breakpoints.xl}px)`]: {
            gridTemplateColumns: "auto auto auto auto",
        },
    },

    card: {
        marginTop: "20px",
        [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
            marginLeft: "10px",
            marginRight: "10px",
        },
    },
}));
