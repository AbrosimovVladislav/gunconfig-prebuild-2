import { Carousel, CarouselProps } from "@mantine/carousel";
import React, { ReactNode } from "react";
import { useStyles } from "./GCCarouselStyles";

interface GCCarouselProps extends CarouselProps {
  children: ReactNode;
}

export const GCCarousel = ({ children, ...props }: GCCarouselProps) => {
  const { classes } = useStyles();
  return (
    <Carousel
        slideSize="25%"
        align="start"
        slideGap="xl"
        breakpoints={[
            { maxWidth: "sm", slideSize: "100%" },
            { maxWidth: "md", slideSize: "50%" },
            { maxWidth: "xl", slideSize: "33%" },
        ]}
        className={classes.carousel}
      {...props}
    >
      {children}
    </Carousel>
  );
};
