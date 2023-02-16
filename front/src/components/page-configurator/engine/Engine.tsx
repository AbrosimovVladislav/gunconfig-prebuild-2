import { useMantineTheme } from "@mantine/core";
import React, { useEffect, useState } from "react";

import GunComponent from "../gun-component/GunComponent";
import { useStyles } from "./EngineStyles";
import { BuildTree } from "../../../schema/configurator/BuildTree";

interface EngineProps {
    data: BuildTree;
}

/***
 * Ratio - percent on which we will multiply images of all gun parts
 * rootGunWidthPercentage - share, which root element will take inside box in width (po shirine)
 * data.width - original width of image which comes from backend DB
 * */
export const Engine = ({ data }: EngineProps) => {

    const [ratio, setRatio] = useState<number | null>(null);
    const { breakpoints } = useMantineTheme().other;
    const { configuratorEngineRatios } = useMantineTheme().other;

    useEffect(() => {
        const currentWindowWidth = window.innerWidth;
        setRatio(currentWindowWidth < breakpoints.laptopXXL ?
            currentWindowWidth * configuratorEngineRatios.rootGunWidthPercentage / data.width :
            breakpoints.laptopXXL * configuratorEngineRatios.rootGunWidthPercentage / data.width);
    }, []);

    const { classes } = useStyles({ rootGunWidth: data.width * ratio });

    return (
        <div className={classes.canvas}>
            <div className={classes.rootGunWrapper}>
                <GunComponent
                    key={data.id}
                    component={data}
                    ratio={ratio}
                />
            </div>
        </div>
    );
};
