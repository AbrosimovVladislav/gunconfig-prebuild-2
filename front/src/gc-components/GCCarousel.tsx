import { Carousel, CarouselProps } from "@mantine/carousel";
import React, { ReactNode } from "react";

interface GCCarouselProps extends CarouselProps {
  children: ReactNode;
}

export const GCAccordion = ({children, ...props}: GCCarouselProps) => {
  return (
    <Carousel>
      {children}
    </Carousel>
  );
};