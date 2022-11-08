import React, { useState } from "react";
import GunComponent from "../gun-component/gun-component";
import { Canvas, RootWrapper } from "./engine.styles";

export const Engine = ({ components }) => {
    const [ratio, setRatio] = useState(0);

    const rootComponent = components.find((el) => el.target === "ROOT");

    return (
        <Canvas>
            <RootWrapper>
                <GunComponent component={rootComponent} ratio={ratio} setRatio={setRatio} />
            </RootWrapper>
        </Canvas>
    );
};
