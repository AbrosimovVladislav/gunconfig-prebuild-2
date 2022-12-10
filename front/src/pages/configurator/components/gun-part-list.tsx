import { Button, Center } from "@mantine/core";
import React from "react";
import { useGetGunPartsByParentAndType } from "../../../rendering-engine/service/configuratorService";
import { useBuildTreeStore } from "../../../rendering-engine/store/BuildTreeStore";
import { ClickedGunPart } from "../[base64]";

interface GunPartListProps {
    clickedGunPart: ClickedGunPart;
    setClickedGunPart: (clickedGunPart: ClickedGunPart) => void;
}

const GunPartList = ({ clickedGunPart, setClickedGunPart }: GunPartListProps) => {
    const { replaceGunPart } = useBuildTreeStore();
    const { data: gunParts } = useGetGunPartsByParentAndType(clickedGunPart.parentId, clickedGunPart.type, "1");

    return (
        <Center>
            {gunParts?.map((part) => (
                <Button
                    variant="subtle"
                    onClick={() => {
                        replaceGunPart(clickedGunPart.itemId, part);
                        setClickedGunPart({
                            itemId: part.id,
                            parentId: 1,
                            type: part.type,
                        });
                    }}
                    key={part.id}
                >
                    {part.name}
                </Button>
            ))}
        </Center>
    );
};

export default GunPartList;
