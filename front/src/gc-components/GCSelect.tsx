import { Select } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons";
import { ReactNode } from "react";

interface GCSelectProps {
    icon: ReactNode;
    data: string[];
}

const GCSelect = ({icon, data}: GCSelectProps) => {
    return <Select
        rightSection={<IconChevronDown size={14}/>}
        styles={{ rightSection: { pointerEvents: 'none' } }}
        transition="pop"
        transitionDuration={400}
        dropdownComponent="div"
        icon={icon}
        data={data}/>
}
export default GCSelect;