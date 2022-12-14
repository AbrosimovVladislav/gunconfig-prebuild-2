import { Carousel, CarouselProps } from "@mantine/carousel";
import React, { ReactNode } from "react";

interface GCCarouselProps extends CarouselProps {
  children: ReactNode;
}

export const GCCarousel = ({children, ...props}: GCCarouselProps) => {
  return (
    <Carousel slideSize="25%" slideGap="xl" align="start" >
        {children}
    </Carousel>
  );
};