import { ReactNode } from "react";
import { Badge } from "@mantine/core";
import {BadgeProps} from "@mantine/core/lib/Badge/Badge";

interface GCBadgeProps extends BadgeProps{
    children: ReactNode;
}

export const GCBadge = ({ children, ...props }: GCBadgeProps) => {
    return <Badge variant="gradient" {...props}>{children}</Badge>;
};
