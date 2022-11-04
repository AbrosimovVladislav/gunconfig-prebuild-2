import { ReactNode } from "react";
import { Badge, BadgeProps, createStyles, MantineGradient } from "@mantine/core";
import { BadgeVariant } from "@mantine/core/lib/Badge/Badge.styles";
import { gradient } from "@mantine/styles/lib/theme/functions/fns/gradient/gradient";

const useStyles = createStyles((theme) => ({
    gradient: {
        backgroundImage: "linear-gradient(103.6deg, #D63D91 16.1%, #E18A4A 100%)",
        color: "#F9F9FB",
        borderRadius: "24px",
        border: "none"
    }
}))

interface GCBadgeProps {
    children: ReactNode;
    variant?: BadgeVariant;
    gradient?: MantineGradient;
}

export const GCBadge = ({children, variant, gradient}: GCBadgeProps) => {
    const { classes } = useStyles();
    return <Badge variant={variant} gradient={gradient} className={classes.gradient}>{children}</Badge>;
};
