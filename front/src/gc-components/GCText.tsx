import {ReactNode} from "react";
import {DefaultMantineColor, MantineNumberSize, Sx, Text, TextProps} from "@mantine/core";

interface GCTextProps extends TextProps {
  children: ReactNode;
  size?: MantineNumberSize;
  color?: DefaultMantineColor;
  weight?: number;
  sx?: Sx;
  mt?: MantineNumberSize;
  variant?: "text" | "link" | "gradient";
}

export const GCText = ({children, size, color, weight, sx, mt, variant, ...props}: GCTextProps) => {
  return (
      <Text size={size} color={color} weight={weight} sx={sx} mt={mt} variant={variant} {...props}>
        {children}
      </Text>
  );
};
