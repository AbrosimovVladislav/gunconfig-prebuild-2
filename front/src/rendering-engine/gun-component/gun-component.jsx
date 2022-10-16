import React, { useLayoutEffect, useRef } from "react";
import { RootComponent, Component } from "./gun-component.styles";

const GunComponent = ({ component, ratio, setRatio }) => {
    const targetRef = useRef();

    useLayoutEffect(() => {
        if (targetRef.current && component.target === "ROOT") {
            console.log("calculated");
            setRatio(targetRef.current.offsetWidth / component.width);
        }
    }, []);

    return component.target === "ROOT" ? (
        <RootComponent ref={targetRef} src={component.image} x={component.x} y={component.y} />
    ) : (
        <Component
            src={component.image}
            width={ratio !== 0 ? component.width * ratio : component.width}
            x={component.x}
            y={component.y}
        />
    );
};

export default GunComponent;
