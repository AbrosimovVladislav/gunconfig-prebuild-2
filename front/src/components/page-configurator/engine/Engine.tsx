import { useMantineTheme } from "@mantine/core";
import React, { useEffect, useState } from "react";

import GunComponent from "../gun-component/GunComponent";
import { useStyles } from "./EngineStyles";
import { BuildTree } from "../../../schema/configurator/BuildTree";

interface EngineProps {
    data: BuildTree;
}

export const Engine = ({ data }: EngineProps) => {
    const [ratio, setRatio] = useState<number | null>(null);
    const { breakpoints } = useMantineTheme().other;

    useEffect(() => {
        setRatio(window.innerWidth < breakpoints.laptopXXL ?
            window.innerWidth * 0.4 / data.width :
            breakpoints.laptopXXL * 0.5 / data.width);
    }, []);

    const { classes } = useStyles({ width: data.width * ratio });

    return (
        <div className={classes.canvas}>
            <div className={classes.root}>
                <GunComponent
                    key={data.id}
                    component={data}
                    ratio={ratio}
                />
            </div>
        </div>
    );
};
