import React, { useEffect } from "react";
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
import {
    findProductInBuildTree,
    getIdsOfBuildTree,
    mapBuildTreeToProducts,
} from "../../../services/configuratorService";
import {
    getGunPartRenderingInfo,
    getGunPartsByParentAndType,
} from "../../../services/client/configuratorClient";


const GunPartsList = () => {
    const { replaceGunPart } = useBuildTreeStore();
    const { clickedGunPart, setClickedGunPart } = useClickedGunPartStore();
    const { gunParts, setGunParts } = useGunPartListCarouselStore();
    const { classes } = useStyles();
    const { buildTree } = useBuildTreeStore();

    useEffect(() => {
        //when we render component first time set gun parts from current build tree
        buildTree && setGunParts(mapBuildTreeToProducts(buildTree));
        setClickedGunPart(null);
    }, []);

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

    async function onGunPartClick(newClickedProduct: Product) {
        if (clickedGunPart) {
            !newClickedProduct.incompatible && chooseGunPartFromList(clickedGunPart, newClickedProduct);
        } else {
            const { itemId, parentId } = findProductInBuildTree(
                buildTree, newClickedProduct.productId, buildTree.id)
            || { itemId: undefined, parentId: undefined };
            setClickedGunPart({
                itemId: itemId,
                productId: newClickedProduct.productId,
                parentId: parentId,
                type: newClickedProduct.type,
            });
            const gunPartsForChange: Product[] = await getGunPartsByParentAndType(
                parentId, newClickedProduct.type, getIdsOfBuildTree(buildTree));
            await setGunParts(gunPartsForChange);
        }
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
                         onClick={() => onGunPartClick(part)}>
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
