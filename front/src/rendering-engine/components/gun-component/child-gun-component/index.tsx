import React from "react";
import { BuildTree } from "../../../schema/BuildTreeSchema";
import { useClickedGunPartStore } from "../../../store/ClickedGunPartStore";
import { useStyles } from "./ChildGunComponentStyles";
import { Image } from "@mantine/core";

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
    const {classes} = useStyles({
        left: component.x,
        top: component.y,
        width: ratio !== 0 ? component?.width * ratio : component?.width
    });

    return (
        <div className={classes.absoluteWrapper} key={component.id}>
            <div className={classes.relativePlaceholder}>
                <div className={classes.image} onClick={() => setClickedGunPart(clickedGunPart)}>
                    <Image src={component.image} />
                </div>
                {(component.children ?? []).map((child) => {
                    return <ChildGunComponent key={child.id} component={child} parentId={component.id} ratio={ratio}/>;
                })}
            </div>
        </div>
    );
};
