import React, { useLayoutEffect, useRef } from "react";
import {
    RootComponent,
    AbsoluteWrapper,
    ImageWrapper,
    RelativeChildElementPlaceholder,
    RedDot,
} from "./gun-component.styles";

const GunComponent = ({ component, ratio, setRatio }) => {
    const targetRef = useRef();
    useLayoutEffect(() => {
        if (targetRef.current && component?.target === "ROOT") {
            setRatio(targetRef.current.offsetWidth / component.width);
        }
    }, []);

    return component?.target === "ROOT" ? (
        <>
            {/* ROOT ELEMENT */}
            <RootComponent ref={targetRef} src={component.image} x={component.x} y={component.y} />

            {/* CHILDREN OF ROOT ELEMENT */}
            {(component.children ?? []).map((el) => {
                return (
                    <AbsoluteWrapper width={ratio !== 0 ? el.width * ratio : el.width} x={el.x} y={el.y}>
                        <RelativeChildElementPlaceholder>
                            <ImageWrapper src={el.image} />
                            {(el.children ?? []).map((child) => {
                                return <GunComponent component={child} ratio={ratio} />;
                            })}
                        </RelativeChildElementPlaceholder>
                    </AbsoluteWrapper>
                );
            })}
        </>
    ) : (
        // NON-ROOT ELEMENTS AND NON-CHILDREN OF ROOT ELEMENT
        <AbsoluteWrapper
            width={ratio !== 0 ? component.width * ratio : component.width}
            x={component.x}
            y={component.y}
        >
            <RelativeChildElementPlaceholder>
                <ImageWrapper src={component.image} />
                <RedDot />
                {(component.children ?? []).map((child) => {
                    return <GunComponent component={child} ratio={ratio} />;
                })}
            </RelativeChildElementPlaceholder>
        </AbsoluteWrapper>
    );
};

export default GunComponent;
