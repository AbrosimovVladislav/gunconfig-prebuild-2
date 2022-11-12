import { ReactNode } from "react";
import {Group, GroupProps} from "@mantine/core";
import { GroupPosition } from "@mantine/core/lib/Group/Group.styles";
import { MantineNumberSize } from "@mantine/styles/lib/theme/types/MantineSize";

interface GCGroupProps extends GroupProps{
    children: ReactNode;
    ml?: number;
    spacing?: number;
    className?: string;
    position?: GroupPosition;
    mt?: MantineNumberSize;
}

export const GCGroup = ({ children, ml, spacing, className, position, mt, ...props }: GCGroupProps) => {
    return (
        <Group ml={ml} spacing={spacing} className={className} position={position} mt={mt} {...props}>
            {children}
        </Group>
    );
};
