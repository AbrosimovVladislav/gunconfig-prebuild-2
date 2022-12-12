import React from "react";
import {BuildTree} from "../../../schema/BuildTreeSchema";
import {AbsoluteWrapper, ImageWrapper, RelativeChildElementPlaceholder} from "../gun-component.styles";
import {useClickedGunPartStore} from "../../../store/ClickedGunPartStore";

interface ChildGunComponentProps {
    component: BuildTree;
    ratio: number;
    parentId: number;
}

export const ChildGunComponent = ({component, ratio, parentId}: ChildGunComponentProps) => {
    const clickedGunPart = {
        itemId: component.id,
        parentId: parentId,
        type: component.type,
    };

    const {setClickedGunPart} = useClickedGunPartStore();

    return (
        <AbsoluteWrapper
            key={component.id}
            x={component.x}
            y={component.y}
            width={ratio !== 0 ? component?.width * ratio : component?.width}
        >
            <RelativeChildElementPlaceholder >
                <ImageWrapper src={component.image} onClick={() => setClickedGunPart(clickedGunPart)}/>
                {(component.children ?? []).map((child) => {
                    return <ChildGunComponent key={child.id} component={child} parentId={component.id} ratio={ratio}/>;
                })}
            </RelativeChildElementPlaceholder>
        </AbsoluteWrapper>
    );
};
