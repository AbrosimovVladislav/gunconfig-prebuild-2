import { createStyles } from "@mantine/core";

interface gunComponentStylesProps {
    width: number,
}

export const useStyles = createStyles((theme, {width}: gunComponentStylesProps) => ({
    root: {
        width: [`${width}px`],
        [`&:hover`]: {
            filter: "drop-shadow(2px 0 2px red) drop-shadow(0 2px 2px red) drop-shadow(-2px 0 2px red) drop-shadow(0 -2px 2px red)",
        }
    }
}));
