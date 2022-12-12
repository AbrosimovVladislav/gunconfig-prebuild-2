import {Button, Center} from "@mantine/core";
import React from "react";
import {useGetGunPartsByParentAndType} from "../service/configuratorService";
import {useBuildTreeStore} from "../store/BuildTreeStore";
import {useClickedGunPartStore} from "../store/ClickedGunPartStore";
import {ClickedGunPart} from "../../pages/configurator/[base64]";
import {BuildTree} from "../schema/BuildTreeSchema";

const GunPartList = () => {
    const {replaceGunPart} = useBuildTreeStore();
    const {clickedGunPart, setClickedGunPart} = useClickedGunPartStore();
    const {data: gunParts} = useGetGunPartsByParentAndType(clickedGunPart.parentId, clickedGunPart.type, "1");

    function chooseGunPartFromList(oldGunPart: ClickedGunPart, newGunPart: BuildTree) {
        replaceGunPart(oldGunPart.itemId, newGunPart);
        setClickedGunPart({
            itemId: newGunPart.id,
            //ToDo get real parent here
            //potentially, when we calling gunParts for this list, we call it by ParentId and Type
            //maybe in cardDto from back we can return parentId
            parentId: 1,
            type: newGunPart.type,
        });
    }

    return (
        <Center>
            {gunParts?.map((part) => (
                <Button
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
