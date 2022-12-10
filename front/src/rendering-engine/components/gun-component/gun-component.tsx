import React, { useLayoutEffect, useRef } from "react";
import { BuildTree } from "../../schema/BuildTreeSchema";
import { ChildGunComponent } from "./child-gun-component";
import { RootComponent } from "./gun-component.styles";
import { ROOT_GUN_COMPONENT_WIDTH } from "../../consts";

interface GunComponentProps {
    component: BuildTree;
    ratio: number;
    setRatio?: (ratio: number) => void;
}

const GunComponent = ({ component, ratio, setRatio }: GunComponentProps) => {
    const ref = useRef(null);
    const isRootComponent = component.type === "GUN";

    useLayoutEffect(() => {
        // TODO: Implement utility function to get component width based on device width
        setRatio?.(ROOT_GUN_COMPONENT_WIDTH / component.width);
    }, [ref]);

    return isRootComponent ? (
        <>
            <RootComponent ref={ref} src={component?.image} />
            {ratio &&
                component?.children?.map((gunComponent) => (
                    <ChildGunComponent key={gunComponent.id} component={gunComponent} ratio={ratio} />
                ))}
        </>
    ) : (
        ratio && component && <ChildGunComponent component={component} ratio={ratio} />
    );
};

export default GunComponent;
