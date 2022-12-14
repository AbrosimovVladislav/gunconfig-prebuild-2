import React from "react";
import { useGetGunPartsByParentAndType } from "../../service/configuratorService";
import { useBuildTreeStore } from "../../store/BuildTreeStore";
import { useClickedGunPartStore } from "../../store/ClickedGunPartStore";
import { ClickedGunPart } from "../../../pages/configurator/[base64]";
import { BuildTree } from "../../schema/BuildTreeSchema";
import GunPartCard from "../../../components/gun-part-card/GunPartCard";
import Catalog from "../../../components/catalog/Catalog";


const GunPartList = () => {
    const {buildIds, replaceGunPart} = useBuildTreeStore();
    const {clickedGunPart, setClickedGunPart} = useClickedGunPartStore();
    const {data: gunParts} = useGetGunPartsByParentAndType(clickedGunPart.parentId, clickedGunPart.type, buildIds);

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
        <Catalog>
            {gunParts?.map((part) => (

                <div
                    key={part.id}
                    onClick={() => {
                        if (!part.incompatible) {chooseGunPartFromList(clickedGunPart, part)}
                    }}
                >

                    <GunPartCard hoverable
                                 active={part.id == clickedGunPart.itemId}
                                 disabled={part.incompatible}
                                 product={{
                                     productId: part.id,
                                     name: part.name,
                                     productImageUrl: part.image,
                                     description: "",
                                     brand: "Brand",
                                     type: part.type
                                 }}/>
                </div>
            ))}
        </Catalog>
    );
};

export default GunPartList;
