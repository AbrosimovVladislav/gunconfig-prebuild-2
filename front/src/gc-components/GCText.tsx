import { ReactNode } from "react";
import { DefaultMantineColor, MantineNumberSize, Sx, Text, TextProps } from "@mantine/core";

interface GCTextProps extends TextProps {
    children: ReactNode;
    size?: MantineNumberSize;
    color?: DefaultMantineColor;
    weight?: number;
    sx?: Sx;
    mt?: MantineNumberSize;
    variant?: "text" | "link" | "gradient";
    align?: "start" | "center" | "end"
}

export const GCText = ({ children, size, color, weight, sx, mt, variant, align, ...props }: GCTextProps) => {
    return (
        <Text size={size} color={color} weight={weight} sx={sx} mt={mt} variant={variant} align={align}
        style={{lineBreak: "inherit"}}
              {...props}>
            {children}
        </Text>
    );
};
