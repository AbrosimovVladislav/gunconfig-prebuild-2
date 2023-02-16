import React, { useEffect } from "react";
import { GCCarousel } from "../../../gc-components/carousel/GCCarousel";
import { GCAutocomplete, GCText } from "../../../gc-components";
import { useStyles } from "./GunPartsListStyles";
import { useBuildTreeStore } from "../../../store/BuildTreeStore";
import { useClickedGunPartStore } from "../../../store/ClickedGunPartStore";
import { useGunPartListStore } from "../../../store/GunPartListStore";
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
import { ClickedGunPart } from "../../../schema/configurator/ClickedGunPart";
import { IconSearch } from "@tabler/icons";


const GunPartsList = () => {
    const { replaceGunPart } = useBuildTreeStore();
    const { clickedGunPart, setClickedGunPart } = useClickedGunPartStore();
    const { gunParts, setGunParts } = useGunPartListStore();
    const { classes } = useStyles();
    const { buildTree } = useBuildTreeStore();

    useEffect(() => {
        //when we render component first time set gun parts from current build tree
        buildTree && setGunParts(mapBuildTreeToProducts(buildTree));
        setClickedGunPart(null);
    }, []);

    async function onGunPartClick(newClickedProduct: Product) {
        // if customer clicks on build part to change it,
        // and we have list of gun parts candidates for change
        if (clickedGunPart) {
            !newClickedProduct.incompatible && await chooseGunPartFromList(clickedGunPart, newClickedProduct);
        } else {
            // if in gpList we have current gun parts,
            // and we want to click on gp to get list of candidates for change
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

    async function chooseGunPartFromList(oldGunPart: ClickedGunPart, newProduct: Product) {
        const newGunPartRenderingInfo: BuildTree =
            await getGunPartRenderingInfo(newProduct, oldGunPart.parentId);
        //ToDo test this function when some gp will have more than one kid
        replaceGunPart(oldGunPart.itemId, newGunPartRenderingInfo);
        setClickedGunPart({
            itemId: newGunPartRenderingInfo.id,
            productId: newProduct.productId,
            parentId: oldGunPart.parentId,
            type: newProduct.type,
        });
    }

    if (!gunParts) {
        return <div></div>;
    }

    return (
        <div>
            <div className={classes.header}>
                <GCText h2 bold>
                    {clickedGunPart ? clickedGunPart.type + " to change" : "Current gun parts"}
                </GCText>
                <GCAutocomplete
                    className={classes.search}
                    placeholder="Search"
                    icon={<IconSearch size={16} stroke={1.5} />}
                    data={["FirstSearch", "SecondSearch", "ThirdSearch"]}
                />
            </div>
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
