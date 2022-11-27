import {ReactNode} from "react";
import {Checkbox, CheckboxProps, MantineSize} from "@mantine/core";
import {MantineNumberSize} from "@mantine/styles/lib/theme/types/MantineSize";

interface GCCheckboxProps extends CheckboxProps {
    children: ReactNode;
    ml?: number;
    size?: MantineSize;
    className?: string;
    mt?: MantineNumberSize;
    checked?: boolean;
}

export const GCCheckbox = ({children, ml, className, size, checked, mt, ...props}: GCCheckboxProps) => {
    return (
        <Checkbox checked={checked} ml={ml} className={className} mt={mt}{...props} styles={{label: {display: "flex"}}}>
            {children}
        </Checkbox>
    );
};
