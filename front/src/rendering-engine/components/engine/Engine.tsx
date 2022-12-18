import { useMantineTheme } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { BuildTree } from "../../schema/BuildTreeSchema";

import GunComponent from "../gun-component/GunComponent";
import { useStyles } from "./EngineStyles";

interface EngineProps {
    data: BuildTree;
}

export const Engine = ({data}: EngineProps) => {
    const [ratio, setRatio] = useState<number | null>(null);
    const {breakpoints} = useMantineTheme();
    const {classes} = useStyles();

    useEffect(() => {
        setRatio(window.innerWidth < breakpoints.xl ?
            window.innerWidth * 0.4 / data.width :
            1400 * 0.4 / data.width);
    }, []);

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
