import { SegmentedControl } from "@mantine/core";
import { IconBorderAll, IconGridDots } from "@tabler/icons";

interface GCSegmentedControlProps {
    value: string;
    onChange: (value) => void;
}

const GCSegmentedControl = (({value, onChange}: GCSegmentedControlProps) => {
    return (
        <SegmentedControl value={value}
                          onChange={onChange}
                          data={[
                              {label: (<IconBorderAll/>), value: 'catalog233'},
                              {label: (<IconGridDots/>), value: 'catalog344'},

                          ]}/>
    );
});

export default GCSegmentedControl;