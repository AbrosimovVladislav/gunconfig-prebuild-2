import { Carousel, CarouselProps } from "@mantine/carousel";
import React, { ReactNode } from "react";

interface GCCarouselSlideProps extends CarouselProps {
    children: ReactNode;
}

export const GCCarouselSlide = ({children, ...props}: GCCarouselSlideProps) => {
    return (
        <Carousel.Slide {...props}>
            {children}
        </Carousel.Slide>
    );
};