import React, { useState } from "react";

import GunComponent from "../gun-component/gun-component";
import { Canvas, RootWrapper } from "./engine.styles";

export const Engine = ({ data }) => {
    const [ratio, setRatio] = useState(0);

    return (
        <Canvas>
            <RootWrapper>
                <GunComponent
                    component={data}
                    ratio={ratio}
                    setRatio={setRatio}
                />
            </RootWrapper>
        </Canvas>
    );
};
