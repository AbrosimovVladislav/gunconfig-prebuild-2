import React from "react";
import { BuildTree } from "../../../schema/BuildTreeSchema";
import GunComponent from "../gun-component";
import { AbsoluteWrapper, ImageWrapper, RelativeChildElementPlaceholder } from "../gun-component.styles";

interface ChildGunComponentProps {
    component: BuildTree;
    ratio: number;
}

export const ChildGunComponent = ({ component, ratio }: ChildGunComponentProps) => (
    <AbsoluteWrapper
        key={component.id}
        x={component.x}
        y={component.y}
        width={ratio !== 0 ? component?.width * ratio : component?.width}
    >
        <RelativeChildElementPlaceholder>
            <ImageWrapper src={component.image} />
            {(component.children ?? []).map((child) => {
                return <ChildGunComponent key={child.id} component={child} ratio={ratio} />;
            })}
        </RelativeChildElementPlaceholder>
    </AbsoluteWrapper>
);
