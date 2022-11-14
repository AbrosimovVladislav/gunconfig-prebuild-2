import {Grid, GridProps} from "@mantine/core";
import {ReactNode} from "react";

interface GCGridProps extends GridProps{
    children: ReactNode;
    columns?: number;
}

export const GCGrid = ({ children, columns, ...props }: GCGridProps) => {
    return (
        <Grid columns={columns} {...props}>
            {children}
        </Grid>
    );
};
