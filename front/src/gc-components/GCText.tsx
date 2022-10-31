import { ReactNode } from "react";
import { DefaultMantineColor, MantineNumberSize, Sx } from "@mantine/core";
import { Text } from "@mantine/core";

interface GCTextProps {
    children: ReactNode;
    size?: MantineNumberSize;
    color?: DefaultMantineColor;
    weight?: number;
    sx?: Sx;
    mt?: MantineNumberSize;
    variant?: "text" | "link" | "gradient";
}

export const GCText = ({ children, size, color, weight, sx, mt, variant }: GCTextProps) => {
    return (
        <Text size={size} color={color} weight={weight} sx={sx} mt={mt} variant={variant}>
            {children}
        </Text>
    );
};
