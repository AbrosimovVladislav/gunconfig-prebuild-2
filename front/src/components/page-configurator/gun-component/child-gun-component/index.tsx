import React from "react";
import { BuildTree } from "../../../../schema/configurator/BuildTree";
import { useClickedGunPartStore } from "../../../../store/ClickedGunPartStore";
import { useStyles } from "./ChildGunComponentStyles";
import { Image } from "@mantine/core";
import { useGunPartListCarouselStore } from "../../../../store/GunPartListCarouselStore";
import {
    getGunPartsByParentAndType,
    getIdsArrOfBuildTree,
} from "../../../../services/configuratorService";
import { useBuildTreeStore } from "../../../../store/BuildTreeStore";
import { Product } from "../../../../schema/common/Product";

interface ChildGunComponentProps {
    component: BuildTree;
    ratio: number;
    parentId: number;
}

export const ChildGunComponent = ({ component, ratio, parentId }: ChildGunComponentProps) => {
    const clickedGunPart = {
        itemId: component.id,
        productId: component.productId,
        parentId: parentId,
        type: component.type,
    };

    const { buildTree } = useBuildTreeStore();
    const { setGunParts } = useGunPartListCarouselStore();
    const { setClickedGunPart } = useClickedGunPartStore();
    const { classes } = useStyles({
        left: component.x,
        top: component.y,
        width: ratio !== 0 ? component?.width * ratio : component?.width,
    });

    async function onGunPartClick() {
        setClickedGunPart(clickedGunPart);
        const gunPartsForChange: Product[] = await getGunPartsByParentAndType(
            clickedGunPart.parentId, clickedGunPart.type, getIdsArrOfBuildTree(buildTree));
        await setGunParts(gunPartsForChange);
    }

    return (
        <div className={classes.absoluteWrapper} key={component.id}>
            <div className={classes.relativePlaceholder}>
                <div className={classes.image} onClick={onGunPartClick}>
                    <Image src={component.image} />
                </div>
                {(component.children ?? []).map((child) => {
                    return <ChildGunComponent key={child.id} component={child}
                                              parentId={component.id} ratio={ratio} />;
                })}
            </div>
        </div>
    );
};
