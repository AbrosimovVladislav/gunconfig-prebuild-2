import {
    IconCheck,
    IconChevronLeft,
    IconChevronRight,
    IconCircleMinus,
    IconCirclePlus,
    IconPhoto, IconQuestionMark,
    IconReload,
    IconUpload,
    IconX
} from "@tabler/icons";
import { useMantineTheme } from "@mantine/core";
import { MouseEventHandler, ReactNode } from "react";
import { useStyles } from "./GCIconButtonStyles";

interface GCIconButtonProps {
    icon?: "arrow-next" | "arrow-previous" | "close" | "confirm" | "share" | "refresh" | "fold" | "unfold" | "question",
    sm?: boolean,
    lg?: boolean,
    top?: boolean,
    bottom?: boolean,
    left?: boolean,
    right?: boolean,
    primary?: boolean,
    primaryReversed?: boolean,
    onClick?: MouseEventHandler,
}

export const GCIconButton = ({icon, sm, lg, top, bottom, left, right, primary, primaryReversed, onClick}: GCIconButtonProps) => {
    const { classes } = useStyles();
    const size = sm ? 16 : lg ? 22 : 20;
    const color = primary ? useMantineTheme().fn.primaryColor() :
        primaryReversed ? useMantineTheme().colors.neutralLight[4] :
            useMantineTheme().colors.neutral[2];
    let iconImage: ReactNode;
    switch (icon) {
        case "arrow-next":
            iconImage = <IconChevronRight size={size} color={color}/>;
            break;
        case "arrow-previous":
            iconImage = <IconChevronLeft size={size} color={color}/>;
            break;
        case "close":
            iconImage = <IconX size={size} color={color}/>;
            break;
        case "confirm":
            iconImage = <IconCheck size={size} color={color}/>;
            break;
        case "refresh":
            iconImage = <IconReload size={size} color={color}/>;
            break;
        case "share":
            iconImage = <IconUpload size={size} color={color}/>;
            break;
        case "fold":
            iconImage = <IconCircleMinus size={size} color={color}/>;
            break;
        case "unfold":
            iconImage = <IconCirclePlus size={size} color={color}/>;
            break;
        case "question":
            iconImage = <IconQuestionMark size={size} color={color}/>;
            break;
        default:
            iconImage = <IconPhoto size={size} color={color}/>;
    }
    return <div className={top ? classes.top :
        bottom ? classes.bottom :
        left ? classes.left :
            right ? classes.right :
                classes.center}>
        <div className={`${classes.button} 
        ${sm ? classes.sm : lg ? classes.lg: classes.md} 
        ${primaryReversed ? classes.buttonPrimary : ""}`}
        onClick={onClick}>
            {iconImage}
        </div>
    </div>
};
