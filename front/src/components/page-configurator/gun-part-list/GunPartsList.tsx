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
import { Product } from "../../../schema/common/Product";
import { getGunPartRenderingInfo } from "../../../services/configuratorService";


const GunPartsList = () => {
    const { replaceGunPart } = useBuildTreeStore();
    const { clickedGunPart, setClickedGunPart } = useClickedGunPartStore();
    const { gunParts } = useGunPartListCarouselStore();
    const { classes } = useStyles();

    async function chooseGunPartFromList(oldGunPart: ClickedGunPart, product: Product) {
        const newGunPartRenderingInfo: BuildTree =
            await getGunPartRenderingInfo(product, oldGunPart.parentId);
        replaceGunPart(oldGunPart.itemId, newGunPartRenderingInfo);
        setClickedGunPart({
            itemId: newGunPartRenderingInfo.id,
            productId: product.productId,
            parentId: oldGunPart.parentId,
            type: product.type,
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
                    <div key={part.productId}
                         onClick={() => !part.incompatible && clickedGunPart && chooseGunPartFromList(clickedGunPart, part)}>
                        <GunPartCard hoverable
                                     active={clickedGunPart && part.productId == clickedGunPart.productId}
                                     disabled={part.incompatible}
                                     sm
                                     product={{
                                         productId: part.productId,
                                         name: part.name,
                                         productImageUrl: part.productImageUrl,
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
