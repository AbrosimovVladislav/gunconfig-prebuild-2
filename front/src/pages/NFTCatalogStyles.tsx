import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    page: {
        display: "grid",
        alignItems: "flex-start",

        [`@media (min-width: ${theme.breakpoints.md}px)`]: {
            gridTemplateColumns: "1fr auto",
        },
    },
}));
