import React from "react";
import { useStyles } from "./ControlButtonsStyles";
import { ResetToInitialBuildButton } from "./ResetToInitialBuildButton";
import { IsNFTExistsButton } from "./IsNFTExistsButton";
import { ShareBuildButton } from "./ShareBuildButton";
import { ShowCurrentGunPartsButton } from "./ShowCurrentGunPartsButton";


const ControlButtons = () => {

    const { classes } = useStyles();

    return <div className={classes.actions}>
        <ResetToInitialBuildButton />
        <IsNFTExistsButton />
        <ShareBuildButton />
        <ShowCurrentGunPartsButton />
    </div>;
};

export default ControlButtons;
