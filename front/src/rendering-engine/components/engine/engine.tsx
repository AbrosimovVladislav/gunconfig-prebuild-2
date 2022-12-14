import {useMantineTheme} from "@mantine/core";
import React, {useEffect, useState} from "react";
import {BuildTree} from "../../schema/BuildTreeSchema";

import GunComponent from "../gun-component/gun-component";
import {Canvas, RootWrapper} from "./engine.styles";

interface EngineProps {
    data: BuildTree;
}

export const Engine = ({data}: EngineProps) => {
    const [ratio, setRatio] = useState<number | null>(null);

    const [componentSizes, setComponentSizes] = useState({
        canvas: 0,
        rootGunComponent: 0,
    });
    const deviceWidth = window.innerWidth;
    const {breakpoints} = useMantineTheme();

    const updateDimensions = (canvasSize, scaledSize) => {
        setRatio(scaledSize / data.width);
        setComponentSizes({
            canvas: canvasSize,
            rootGunComponent: scaledSize,
        });
    };

    useEffect(() => {
        let width;

        if (deviceWidth > breakpoints.xl) {
            width = 1400;
        } else  {
            width = deviceWidth;
        }

        updateDimensions(width, width * 0.6);
    }, []);

    return (
        <Canvas width={componentSizes.canvas}>
            <RootWrapper width={componentSizes.rootGunComponent}>
                <GunComponent
                    component={data}
                    ratio={ratio}
                    rootGunComponentWidth={componentSizes.rootGunComponent}
                />
            </RootWrapper>
        </Canvas>
    );
};
