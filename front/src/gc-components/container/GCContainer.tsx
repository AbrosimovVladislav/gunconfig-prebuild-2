import React, { ReactNode } from "react";
import { useStyles } from "./GCContainerStyles";

type Props = {
    children: ReactNode;
    size?: "mobileM" | "mobileL" | "tablet" | "laptopS" | "laptopM" | "laptopL" | "laptopXL" | "LaptopXXL";
};

export default function GCContainer({ children, size }: Props) {
    const { classes } = useStyles();
    return (
        <div className={`${classes.container} ${classes[size]}`}>
            {children}
        </div>
    );
}

GCContainer.defaultProps = {
    size: "LaptopXXL"
};

