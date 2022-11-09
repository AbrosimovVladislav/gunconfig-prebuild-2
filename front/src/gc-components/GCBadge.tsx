import { ReactNode } from "react";
import { Badge } from "@mantine/core";
import { BadgeVariant } from "@mantine/core/lib/Badge/Badge.styles";
import {BadgeProps} from "@mantine/core/lib/Badge/Badge";

interface GCBadgeProps extends BadgeProps{
    children: ReactNode;
    variant?: BadgeVariant;
}

export const GCBadge = ({ children, variant, ...props }: GCBadgeProps) => {
    return <Badge variant={variant} {...props}>{children}</Badge>;
};
