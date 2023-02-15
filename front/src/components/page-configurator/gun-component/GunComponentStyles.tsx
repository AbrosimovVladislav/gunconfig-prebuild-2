import { createStyles } from "@mantine/core";

interface gunComponentStylesProps {
    width: number,
}

export const useStyles = createStyles((theme, {width}: gunComponentStylesProps) => ({
    rootGunImage: {
        width: [`${width}px`],
    }
}));
