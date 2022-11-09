import { Autocomplete } from "@mantine/core";
import { ReactNode } from "react";
import {AutocompleteProps} from "@mantine/core/lib/Autocomplete/Autocomplete";

interface GCAutocompleteProps extends AutocompleteProps{
    className?: string;
    placeholder?: string;
    icon?: ReactNode;
    data: string[];
}

export const GCAutocomplete = ({ className, placeholder, icon, data, ...props }: GCAutocompleteProps) => {
    return <Autocomplete className={className} placeholder={placeholder} icon={icon} data={data} {...props}/>;
};
