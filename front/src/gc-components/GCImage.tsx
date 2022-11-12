import {Image, ImageProps} from "@mantine/core";

interface GCImageProps extends ImageProps{
    src: string;
    alt: string;
}

export const GCImage = ({ src, alt, ...props }: GCImageProps) => {
    return <Image src={src} alt={alt} {...props}/>;
};
