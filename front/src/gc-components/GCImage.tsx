import { Image } from "@mantine/core";

interface GCImageProps {
    src: string;
    alt: string;
    className?: string;
}

export const GCImage = ({ src, alt, className }: GCImageProps) => {
    return <Image className={className} src={src} alt={alt} />;
};
