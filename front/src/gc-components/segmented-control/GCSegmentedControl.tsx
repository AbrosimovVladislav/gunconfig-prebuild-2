import { SegmentedControl } from "@mantine/core";
import { IconBorderAll, IconGridDots } from "@tabler/icons";

interface GCSegmentedControlProps {
    value: string;
    onChange: (value) => void;
}

const GCSegmentedControl = (({ value, onChange }: GCSegmentedControlProps) => {
    return (
        <SegmentedControl value={value} onChange={onChange} data={[
            {label: (<IconGridDots/>), value: 'grid-9'},
            {label: (<IconBorderAll/>), value: 'table'},
        ]}/>
    );
});

export default GCSegmentedControl;