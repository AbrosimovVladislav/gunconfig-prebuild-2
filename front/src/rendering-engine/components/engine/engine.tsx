import { useMantineTheme } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { ClickedGunPart } from "../../../pages/configurator/[base64]";
import { BuildTree } from "../../schema/BuildTreeSchema";

import GunComponent from "../gun-component/gun-component";
import { Canvas, RootWrapper } from "./engine.styles";

interface EngineProps {
    data: BuildTree;
    setClickedGunPart: (clickedGunPart: ClickedGunPart) => void;
}

export const Engine = ({ data, setClickedGunPart }: EngineProps) => {
    const [ratio, setRatio] = useState<number | null>(null);

    const [componentSizes, setComponentSizes] = useState({
        canvas: 0,
        rootGunComponent: 0,
    });
    const deviceWidth = window.innerWidth;
    const { breakpoints } = useMantineTheme();

    const updateDimensions = (canvasSize, scaledSize) => {
        setRatio(scaledSize / data.width);
        setComponentSizes({
            canvas: canvasSize,
            rootGunComponent: scaledSize,
        });
    };

    useEffect(() => {
        let width = 0;

        if (deviceWidth > breakpoints.lg) {
            width = 1000;
        } else if (deviceWidth > breakpoints.md) {
            width = 600;
        } else {
            width = 300;
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
                    setClickedGunPart={setClickedGunPart}
                />
            </RootWrapper>
        </Canvas>
    );
};
