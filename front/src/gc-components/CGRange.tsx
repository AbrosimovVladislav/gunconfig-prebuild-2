import { Input, InputProps, MantineSize } from "@mantine/core";
import { MantineNumberSize } from "@mantine/styles/lib/theme/types/MantineSize";

interface GCRangeProps extends InputProps {
    ml?: number;
    size?: MantineSize,
    className?: string;
    mt?: MantineNumberSize;
    placeholders?: string[];
}

export const GCRange = ({ml, className, size, placeholders, mt, ...props}: GCRangeProps) => {
    return (
        <>
            <Input ml={ml} className={className} mt={mt} placeholder={placeholders[0]} {...props}/>
            <Input ml={ml} className={className} mt={mt} placeholder={placeholders[1]} {...props}/>
        </>
    )
        ;
};
