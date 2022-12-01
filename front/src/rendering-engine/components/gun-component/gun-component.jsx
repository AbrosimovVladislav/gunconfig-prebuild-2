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
        if (component && setRatio) {
            setRatio(targetRef.current?.offsetWidth / component?.width);
        }
    }, [component]);

    return (
        <>
            {component?.type === "GUN" ? (
                <RootComponent
                    ref={targetRef}
                    src={component?.image}
                    x={component?.x}
                    y={component?.y}
                />
            ) : (
                component && (
                    <AbsoluteWrapper
                        key={component.id}
                        x={component.x}
                        y={component.y}
                        width={
                            ratio !== 0
                                ? component?.width * ratio
                                : component?.width
                        }
                        height={component.height}
                    >
                        <RelativeChildElementPlaceholder>
                            <ImageWrapper src={component.image} />
                            {(component.children ?? []).map((child) => {
                                return (
                                    <GunComponent
                                        key={child.id}
                                        component={child}
                                        ratio={ratio}
                                    />
                                );
                            })}
                        </RelativeChildElementPlaceholder>
                    </AbsoluteWrapper>
                )
            )}

            {component?.children?.map((child) => (
                <AbsoluteWrapper
                    key={child.id}
                    x={child.x}
                    y={child.y}
                    width={ratio !== 0 ? child?.width * ratio : child?.width}
                    height={child.height}
                >
                    <RelativeChildElementPlaceholder>
                        <ImageWrapper src={child.image} />
                        {(child.children ?? []).map((child) => {
                            return (
                                <GunComponent
                                    key={child.id}
                                    component={child}
                                    ratio={ratio}
                                />
                            );
                        })}
                    </RelativeChildElementPlaceholder>
                </AbsoluteWrapper>
            ))}
        </>
    );
};

export default GunComponent;
