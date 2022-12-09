import React, { useLayoutEffect, useState } from "react";
import { BuildTree } from "../../schema/BuildTreeSchema";

import GunComponent from "../gun-component/gun-component";
import { Canvas, RootWrapper } from "./engine.styles";

interface EngineProps {
    data: BuildTree;
}

export const Engine = ({ data }: EngineProps) => {
    const [ratio, setRatio] = useState<number>(0);

    useLayoutEffect(() => {
        console.log("renderedCount");
    }, [ratio]);

    return (
        <Canvas>
            <RootWrapper>
                <GunComponent component={data} ratio={ratio} setRatio={setRatio} />
            </RootWrapper>
        </Canvas>
    );
};
