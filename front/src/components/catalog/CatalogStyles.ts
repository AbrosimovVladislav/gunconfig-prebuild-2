import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    catalog: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "flex-start",
            margin: "0 -10px",
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
