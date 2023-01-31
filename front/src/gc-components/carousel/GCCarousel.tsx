import { Carousel, CarouselProps } from "@mantine/carousel";
import React, { ReactNode } from "react";
import { useStyles } from "./GCCarouselStyles";
import { useMantineTheme } from "@mantine/core";
import { GCIconButton } from "../icon-button/GCIconButton";

interface GCCarouselProps extends CarouselProps {
  children: ReactNode[];
}

export const GCCarousel = ({ children, ...props }: GCCarouselProps) => {
  const { classes } = useStyles();
  const theme = useMantineTheme();

  return (
    <Carousel
        slideSize="25%"
        align="start"
        loop
        slidesToScroll={1}
        slideGap="xl"
        withControls
        breakpoints={[
            { maxWidth: theme.other.breakpoints.mobileL, slideSize: "100%" },
            { maxWidth: theme.other.breakpoints.laptopS, slideSize: "50%" },
            { maxWidth: theme.other.breakpoints.laptopM, slideSize: "33%" },
        ]}
        classNames={classes}
        previousControlIcon={ <GCIconButton primary icon="arrow-previous"/> }
        nextControlIcon={ <GCIconButton primary icon="arrow-next"/> }
      {...props}
    >
            {children?.map((child) => (
                <Carousel.Slide>
                    {child}
                </Carousel.Slide>
            ))}
    </Carousel>
  );
};
