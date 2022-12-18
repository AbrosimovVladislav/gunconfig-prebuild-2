import { createStyles } from "@mantine/core";

export const useStyles = createStyles(() => ({
    root: {
        width: "100%",
        [`&:hover`]: {
            filter: "drop-shadow(2px 0 2px red) drop-shadow(0 2px 2px red) drop-shadow(-2px 0 2px red) drop-shadow(0 -2px 2px red)",
        }
    }
}));
