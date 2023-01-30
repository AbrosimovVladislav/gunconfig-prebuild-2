import { GCIconButton } from "../../../gc-components/icon-button/GCIconButton";
import { GCTooltip } from "../../../gc-components/tooltip/GCTooltip";
import React, { useState } from "react";
import { Button, Center, Modal } from "@mantine/core";
import { useRouter } from "next/router";
import { useStyles } from "./ControlButtonsStyles";

export const ResetToInitialBuildButton = () => {

    const router = useRouter();
    const [isResetToInitialBuildModalOpened, setIsResetToInitialBuildModalOpened] = useState(false);

    const { classes } = useStyles();

    async function onResetToInitialBuildClick() {
        setIsResetToInitialBuildModalOpened(true);
    }

    return <div>
        <GCTooltip label="Return to initial build">
            <div className={classes.iconTop}>
                <GCIconButton primaryReversed onClick={onResetToInitialBuildClick}
                              icon="refresh" />
            </div>
        </GCTooltip>

        <Center>
            <Modal
                opened={isResetToInitialBuildModalOpened}
                onClose={() => setIsResetToInitialBuildModalOpened(false)}
                title="Are you sure you want to reset to initial build?">
                {
                    <div>
                        <Button onClick={() => router.reload()} color={"green"}>
                            Yes
                        </Button>
                        <Button onClick={() => setIsResetToInitialBuildModalOpened(false)}
                                color={"red"}>
                            No
                        </Button>
                    </div>
                }
            </Modal>
        </Center>
    </div>;
};
