import { GCIconButton } from "../../../gc-components/icon-button/GCIconButton";
import React from "react";
import { useStyles } from "./ControlButtonsStyles";
import { mapBuildTreeToProducts } from "../../../services/configuratorService";
import { useClickedGunPartStore } from "../../../store/ClickedGunPartStore";
import { useBuildTreeStore } from "../../../store/BuildTreeStore";
import { useGunPartListCarouselStore } from "../../../store/GunPartListCarouselStore";

export const ShowCurrentGunPartsButton = () => {

    const { clickedGunPart, setClickedGunPart } = useClickedGunPartStore();
    const { buildTree } = useBuildTreeStore();
    const { setGunParts } = useGunPartListCarouselStore();

    const { classes } = useStyles();

    function onShowCurrentPartsClick() {
        setGunParts(mapBuildTreeToProducts(buildTree));
        setClickedGunPart(null);
    }

    return <>
        <div className={classes.iconBottom}>
            <GCIconButton primary={clickedGunPart == null}
                          primaryReversed={clickedGunPart !== null}
                          onClick={onShowCurrentPartsClick} icon="eye" />
        </div>
    </>
}
