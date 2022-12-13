import {Button, Center} from "@mantine/core";
import React from "react";
import {useGetGunPartsByParentAndType} from "../service/configuratorService";
import {useBuildTreeStore} from "../store/BuildTreeStore";
import {useClickedGunPartStore} from "../store/ClickedGunPartStore";
import {ClickedGunPart} from "../../pages/configurator/[base64]";
import {BuildTree} from "../schema/BuildTreeSchema";

const GunPartList = () => {
    const {buildTree, replaceGunPart} = useBuildTreeStore();
    const {clickedGunPart, setClickedGunPart} = useClickedGunPartStore();
    const {data: gunParts} = useGetGunPartsByParentAndType(clickedGunPart.parentId, clickedGunPart.type, getIdsArrOfBuildTree());

    function getIdsArrOfBuildTree(): string {
        let idsArr = [];
        getChildrenIdsRecursively(buildTree, idsArr);
        return idsArr.toString();
    }

    function getChildrenIdsRecursively(buildTree: BuildTree, idsArr: number[]) {
        idsArr.push(buildTree.id);
        if (buildTree.children && buildTree.children.length > 0) {
            buildTree.children.forEach(child => getChildrenIdsRecursively(child, idsArr));
        }
    }

    function chooseGunPartFromList(oldGunPart: ClickedGunPart, newGunPart: BuildTree) {
        replaceGunPart(oldGunPart.itemId, newGunPart);
        setClickedGunPart({
            itemId: newGunPart.id,
            //we take parentId of clicked (existing) gun part,
            // because we are trying to replace it, by brothers (kids of the same parent)
            parentId: oldGunPart.parentId,
            type: newGunPart.type,
        });
    }

    return (
        <Center>
            {gunParts?.map((part) => (
                <Button
                    disabled={part.incompatible}
                    key={part.id}
                    variant="subtle"
                    onClick={() => {
                        chooseGunPartFromList(clickedGunPart, part)
                    }}
                >
                    {part.name}
                </Button>
            ))}
        </Center>
    );
};

export default GunPartList;
