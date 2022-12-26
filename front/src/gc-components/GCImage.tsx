import { Image, ImageProps } from "@mantine/core";

interface GCImageProps extends ImageProps {
    src: string;
    alt: string;
    className?: string;
}

export const GCImage = ({src, alt, className, ...props}: GCImageProps) => {
    return <Image src={src} alt={alt} className={className} {...props}/>
};
