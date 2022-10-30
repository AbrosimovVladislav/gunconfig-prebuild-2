import { Image } from "@mantine/core";

interface GCImageProps {
    src: string;
    alt: string;
}

export const GCImage = ({ src, alt }: GCImageProps) => {
    return <Image src={src} alt={alt} />;
};
