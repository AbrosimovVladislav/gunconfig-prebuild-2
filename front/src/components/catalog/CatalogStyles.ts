import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    catalog: {
        display: "grid",
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
        '&:hover': {
            outline: [`1px solid ${theme.colors.violet[7]}`],
            boxShadow: [`${theme.shadows.md}`],
            borderRadius: "8px",
        }
    },
}));
