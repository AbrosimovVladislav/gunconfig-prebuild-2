import React from "react";
import { GCCarousel } from "../../../gc-components/carousel/GCCarousel";
import { GCText } from "../../../gc-components";
import { useStyles } from "./GunPartsListStyles";
import { useBuildTreeStore } from "../../../store/BuildTreeStore";
import { useClickedGunPartStore } from "../../../store/ClickedGunPartStore";
import { useGunPartListCarouselStore } from "../../../store/GunPartListCarouselStore";
import { ClickedGunPart } from "../../../pages/configurator/[base64]";
import { BuildTree } from "../../../schema/configurator/BuildTree";
import GunPartCard from "../../common/gun-part-card/GunPartCard";


const GunPartsList = () => {
    const { replaceGunPart } = useBuildTreeStore();
    const { clickedGunPart, setClickedGunPart } = useClickedGunPartStore();
    const { gunParts } = useGunPartListCarouselStore();
    const { classes } = useStyles();

    function chooseGunPartFromList(oldGunPart: ClickedGunPart, newGunPart: BuildTree) {
        //ToDo make backend call for get build tree product info
        replaceGunPart(oldGunPart.itemId, newGunPart);
        setClickedGunPart({
            itemId: newGunPart.id,
            //we take parentId of clicked (existing) gun part,
            // because we are trying to replace it, by brothers (kids of the same parent)
            parentId: oldGunPart.parentId,
            type: newGunPart.type,
        });
    }

    if (!gunParts) {
        return <div></div>;
    }

    return (
        <div>
            <GCText className={classes.header} h2 bold>
                {clickedGunPart ? clickedGunPart.type + " to change" : "Current gun parts"}
            </GCText>
            {gunParts && gunParts.length > 0 && <GCCarousel className={classes.carousel}>
                {gunParts?.map((part) => (
                    <div key={part.id}
                         onClick={() => !part.incompatible && clickedGunPart && chooseGunPartFromList(clickedGunPart, part)}>
                        <GunPartCard hoverable
                                     active={clickedGunPart && part.id == clickedGunPart.itemId}
                                     disabled={part.incompatible}
                                     sm
                                     product={{
                                         productId: part.id,
                                         name: part.name,
                                         productImageUrl: part.thumbnailImage,
                                         brand: part.brand,
                                         type: part.type,
                                     }} />
                    </div>
                ))}
            </GCCarousel>
            }
        </div>
    );
};

export default GunPartsList;
