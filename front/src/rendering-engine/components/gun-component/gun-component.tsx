import React, { useEffect, useRef } from "react";
import { BuildTree } from "../../schema/BuildTreeSchema";
import { RootComponent, AbsoluteWrapper, ImageWrapper, RelativeChildElementPlaceholder } from "./gun-component.styles";

interface GunComponentProps {
    component: BuildTree;
    ratio: number;
    setRatio?: (ratio: number) => void;
}

const GunComponent: React.FC<GunComponentProps> = ({ component, ratio, setRatio }) => {
    const targetRef = useRef();

    useEffect(() => {
        if (component && setRatio) {
            // calculate relative size of component
            const target = targetRef.current as HTMLElement;
            const targetWidth = target!.getBoundingClientRect().width;
            const targetRatio = targetWidth / component.width;
            setRatio(targetRatio);
        }
    }, [component]);

    return (
        <>
            {component?.type === "GUN" ? (
                <RootComponent ref={targetRef} src={component?.image} />
            ) : (
                component && (
                    <AbsoluteWrapper
                        key={component.id}
                        x={component.x}
                        y={component.y}
                        width={ratio !== 0 ? component?.width * ratio : component?.width}
                    >
                        <RelativeChildElementPlaceholder>
                            <ImageWrapper src={component.image} />
                            {(component.children ?? []).map((child) => {
                                return <GunComponent key={child.id} component={child} ratio={ratio} />;
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
                >
                    <RelativeChildElementPlaceholder>
                        <ImageWrapper src={child.image} />
                        {(child.children ?? []).map((child) => {
                            return <GunComponent key={child.id} component={child} ratio={ratio} />;
                        })}
                    </RelativeChildElementPlaceholder>
                </AbsoluteWrapper>
            ))}
        </>
    );
};

export default GunComponent;
