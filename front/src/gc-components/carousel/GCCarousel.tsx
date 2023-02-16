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
        slideSize="10%"
        align="start"
        loop
        dragFree
        slidesToScroll={1}
        slideGap="lg"
        withControls
        breakpoints={[
            { maxWidth: theme.other.breakpoints.mobileL, slideSize: "100%" },
            { maxWidth: theme.other.breakpoints.tablet, slideSize: "50%" },
            { maxWidth: theme.other.breakpoints.laptopS, slideSize: "33%" },
            { maxWidth: theme.other.breakpoints.laptopM, slideSize: "25%" },
            { maxWidth: theme.other.breakpoints.laptopL, slideSize: "20%" },
            { maxWidth: theme.other.breakpoints.laptopXL, slideSize: "16.6%" },
            { maxWidth: theme.other.breakpoints.laptopXXL, slideSize: "12.5%" },
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
