import { Tooltip, useMantineTheme } from "@mantine/core";
import { ReactNode } from "react";

interface GCTooltipProps {
    label: ReactNode;
    children: ReactNode;
}

export const GCTooltip = ({label, children}: GCTooltipProps) => {
    const coloredLabel = <div style={{color: useMantineTheme().colors.neutral[2]}}>{label}</div>
    return <Tooltip label={coloredLabel} position="bottom" withArrow arrowSize={8}
                    color={useMantineTheme().colors.neutralLight[4]} offset={-10}
                    style={{boxShadow: useMantineTheme().shadows.xl}}>
        {children}
    </Tooltip>

}