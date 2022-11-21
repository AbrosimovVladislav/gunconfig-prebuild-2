import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    catalog: {
        display: "grid",
        gridTemplateColumns: "1fr",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: "20px",
        paddingTop: "20px",

        [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
            gridTemplateColumns: "1fr 1fr",
        },
        [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
            gridTemplateColumns: "1fr 1fr 1fr",
        },
    },
}));
