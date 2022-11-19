import { Grid, GridProps } from "@mantine/core";
import { ReactNode } from "react";
import { ColSpan } from "@mantine/core/lib/Grid/Col/Col.styles";

interface GCGridColProps extends GridProps {
    children: ReactNode;
    span?: ColSpan;
    xs?: ColSpan;
    sm?: ColSpan;
    md?: ColSpan;
    lg?: ColSpan;
    xl?: ColSpan;
    className?: string;
}

export const GCGridCol = ({ className, children, span, xs, sm, md, lg, xl, ...props }: GCGridColProps) => {
    return (
        <Grid.Col className={className} span={span} xs={xs} sm={sm} md={md} lg={lg} xl={xl} {...props}>
            {children}
        </Grid.Col>
    );
};
