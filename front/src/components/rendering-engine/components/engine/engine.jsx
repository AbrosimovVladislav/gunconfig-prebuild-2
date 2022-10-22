import React, { useState } from "react";
import GunComponent from "../gun-component/gun-component";
import { Canvas, RootWrapper } from "./engine.styles";

export const Engine = ({ components }) => {
    const [ratio, setRatio] = useState(0);

    return (
        <Canvas>
            <RootWrapper>
                {
                    // map root component
                    components
                        .filter((component) => component.target === "ROOT")
                        .map((component, idx) => (
                            <GunComponent component={component} ratio={ratio} setRatio={setRatio} key={idx} />
                        ))
                }

                {
                    // map rest of the components
                    ratio &&
                        components.map(
                            (component, idx) =>
                                component.target !== "ROOT" && (
                                    <GunComponent component={component} ratio={ratio} key={idx} />
                                )
                        )
                }
            </RootWrapper>
        </Canvas>
    );
};
