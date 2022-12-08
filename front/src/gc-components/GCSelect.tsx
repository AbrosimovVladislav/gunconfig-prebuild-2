import {Select, SelectProps} from "@mantine/core";
import { IconChevronDown } from "@tabler/icons";
import { ReactNode } from "react";

interface GCSelectProps extends SelectProps{
    icon: ReactNode;
    data: string[];
}

const GCSelect = ({icon, data, ...props}: GCSelectProps) => {
    return <Select
        {...props}
        rightSection={<IconChevronDown size={14}/>}
        styles={{ rightSection: { pointerEvents: 'none' } }}
        transition="pop"
        transitionDuration={400}
        dropdownComponent="div"
        size="md"
        icon={icon}
        data={data}/>
}
export default GCSelect;