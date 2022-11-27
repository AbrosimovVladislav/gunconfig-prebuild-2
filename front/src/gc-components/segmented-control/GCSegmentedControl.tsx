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
                              {label: (<IconBorderAll/>), value: 'catalogOfThree'},
                              {label: (<IconGridDots/>), value: 'catalogOfFour'},

                          ]}/>
    );
});

export default GCSegmentedControl;