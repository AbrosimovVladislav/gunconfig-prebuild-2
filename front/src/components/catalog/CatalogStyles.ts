import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    catalog: {
        display: "grid",
        gap: "0",
        gridTemplateColumns: "auto",
        justifyContent: "center",
        [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
            gridTemplateColumns: "auto auto",
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
        paddingTop: 0,
        [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
            marginLeft: "10px",
            marginRight: "10px",
        },
    },
}));
