import { ReactNode } from "react";
import { Badge } from "@mantine/core";
import { BadgeVariant } from "@mantine/core/lib/Badge/Badge.styles";

interface GCBadgeProps {
    children: ReactNode;
    variant?: BadgeVariant;
}

export const GCBadge = ({ children, variant }: GCBadgeProps) => {
    return <Badge variant={variant}>{children}</Badge>;
};
