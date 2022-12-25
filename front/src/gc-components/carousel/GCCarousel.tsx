import { Carousel, CarouselProps } from "@mantine/carousel";
import React, { ReactNode } from "react";
import { useStyles } from "./GCCarouselStyles";
import { useMantineTheme } from "@mantine/core";
import { GCIconButton } from "../icon/GCIconButton";

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
            { maxWidth: theme.breakpoints.sm, slideSize: "100%" },
            { maxWidth: theme.breakpoints.md, slideSize: "50%" },
            { maxWidth: theme.breakpoints.xl, slideSize: "33%" },
        ]}
        classNames={classes}
        previousControlIcon={ <GCIconButton primary icon="arrow-previous"/> }
        nextControlIcon={ <GCIconButton  primary icon="arrow-next"/> }
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
