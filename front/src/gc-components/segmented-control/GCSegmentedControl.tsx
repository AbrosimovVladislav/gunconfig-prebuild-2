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
                              {label: (<IconBorderAll/>), value: 'catalogOfFour'},
                              {label: (<IconGridDots/>), value: 'catalogOfThree'},

                          ]}/>
    );
});

export default GCSegmentedControl;