import React from "react";
import {BuildTree} from "../../schema/BuildTreeSchema";
import {ChildGunComponent} from "./child-gun-component";
import {RootComponent} from "./gun-component.styles";

interface GunComponentProps {
    component: BuildTree;
    ratio: number;
    rootGunComponentWidth: number;
}

const GunComponent = ({component, ratio}: GunComponentProps) => {
    const isRootComponent = component.type === "GUN";

    return isRootComponent ? (
        <>
            <RootComponent src={component?.image}/>
            {ratio &&
                component?.children?.map((gunComponent) => (
                    <ChildGunComponent
                        key={gunComponent.id}
                        component={gunComponent}
                        parentId={component.id}
                        ratio={ratio}
                    />
                ))}
        </>
    ) : (
        ratio && component && (
            <ChildGunComponent
                component={component}
                parentId={component.id}
                ratio={ratio}
            />
        )
    );
};

export default GunComponent;
