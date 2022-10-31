import { Autocomplete } from "@mantine/core";
import { ReactNode } from "react";

interface GCAutocompleteProps {
    className?: string;
    placeholder?: string;
    icon?: ReactNode;
    data: string[];
}

export const GCAutocomplete = ({ className, placeholder, icon, data }: GCAutocompleteProps) => {
    return <Autocomplete className={className} placeholder={placeholder} icon={icon} data={data} />;
};
