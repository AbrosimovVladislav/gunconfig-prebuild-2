import { ReactNode } from "react";
import { Text, TextProps, useMantineTheme } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";

interface GCTextProps extends TextProps {
    children: ReactNode;
    h1?: boolean;
    h2?: boolean;
    h3?: boolean;
    caption?: boolean;
    bold?: boolean;
    defaultGradient?: boolean;
    white?: boolean;
    primary?: boolean;
    gray?: boolean;
    align?: "start" | "center" | "end"
}

export const GCText = ({ children, h1, h2, h3, caption, bold, defaultGradient, white, primary, gray, align, ...props }: GCTextProps) => {
    const textSize = useViewportSize().width >= useMantineTheme().breakpoints.md ?
        h1 ? 32 : h2 ? 26 : h3 ? 18 : caption ? 12 : 14 :
        h1 ? 26 : h2 ? 18 : h3 ? 14 : caption ? 10 : 12;

    return (
        <Text size={textSize}
              color={white ? useMantineTheme().colors.white[0] :
                  primary ? useMantineTheme().colors.purple[0] :
                  gray ? useMantineTheme().colors.darkGray[0] :
                      useMantineTheme().colors.defaultBlack[0]}
              weight={bold ? 700 : 400}
              variant={defaultGradient ? "gradient" : "text"}
              align={align}
        style={{lineBreak: "inherit"}}
              {...props}>
            {children}
        </Text>
    );
};
