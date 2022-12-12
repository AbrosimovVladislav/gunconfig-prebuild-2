import React, { useLayoutEffect } from "react";
import { ClickedGunPart } from "../../../pages/configurator/[base64]";
import { BuildTree } from "../../schema/BuildTreeSchema";
import { ChildGunComponent } from "./child-gun-component";
import { RootComponent } from "./gun-component.styles";

interface GunComponentProps {
    component: BuildTree;
    ratio: number;
    rootGunComponentWidth: number;
    setClickedGunPart?: (clickedGunPart: ClickedGunPart) => void;
}

const GunComponent = ({ component, ratio, setClickedGunPart }: GunComponentProps) => {
    const isRootComponent = component.type === "GUN";

    return isRootComponent ? (
        <>
            <RootComponent src={component?.image} />
            {ratio &&
                component?.children?.map((gunComponent) => (
                    <ChildGunComponent
                        key={gunComponent.id}
                        component={gunComponent}
                        parentId={component.id}
                        ratio={ratio}
                        setClickedGunPart={setClickedGunPart}
                    />
                ))}
        </>
    ) : (
        ratio && component && (
            <ChildGunComponent
                component={component}
                parentId={component.id}
                ratio={ratio}
                setClickedGunPart={setClickedGunPart}
            />
        )
    );
};

export default GunComponent;
