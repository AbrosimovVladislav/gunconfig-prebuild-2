import { createStyles } from "@mantine/core";

interface gunComponentStylesProps {
    width: number,
}

export const useStyles = createStyles((theme, {width}: gunComponentStylesProps) => ({
    rootGunImage: {
        width: [`${width}px`],
        filter: "drop-shadow(0 30px 10px rgba(0, 0, 0, 0.3))",
    }
}));
