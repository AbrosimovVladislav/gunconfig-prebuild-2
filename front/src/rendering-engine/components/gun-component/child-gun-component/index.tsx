import React from "react";
import { ClickedGunPart } from "../../../../pages/configurator/[base64]";
import { BuildTree } from "../../../schema/BuildTreeSchema";
import { AbsoluteWrapper, ImageWrapper, RelativeChildElementPlaceholder } from "../gun-component.styles";

interface ChildGunComponentProps {
    component: BuildTree;
    ratio: number;
    parentId: number;
    setClickedGunPart?: (clickedGunPart: ClickedGunPart) => void;
}

export const ChildGunComponent = ({ component, ratio, setClickedGunPart, parentId }: ChildGunComponentProps) => {
    const clickedGunPart = {
        itemId: component.id,
        parentId: parentId,
        type: component.type,
    };

    return (
        <AbsoluteWrapper
            key={component.id}
            x={component.x}
            y={component.y}
            width={ratio !== 0 ? component?.width * ratio : component?.width}
        >
            <RelativeChildElementPlaceholder onClick={() => setClickedGunPart(clickedGunPart)}>
                <ImageWrapper src={component.image} />
                {(component.children ?? []).map((child) => {
                    return <ChildGunComponent key={child.id} component={child} parentId={component.id} ratio={ratio} />;
                })}
            </RelativeChildElementPlaceholder>
        </AbsoluteWrapper>
    );
};
