import { GCTooltip } from "../../../gc-components/tooltip/GCTooltip";
import { GCIconButton } from "../../../gc-components/icon-button/GCIconButton";
import React, { useState } from "react";
import { useStyles } from "./ControlButtonsStyles";
import { Center, Modal } from "@mantine/core";
import Link from "next/link";
import { GCText } from "../../../gc-components";
import { getBase64CodeFromBuildTree } from "../../../services/configuratorService";
import { getNFTIdByBase64Code } from "../../../services/client/nftClient";
import { FRONT_CURRENT_PATH } from "../../../config/env-paths";
import { useBuildTreeStore } from "../../../store/BuildTreeStore";

export const IsNFTExistsButton = () => {

    const { buildTree } = useBuildTreeStore();
    const [isNFTExistsUrl, setIsNFTExistsUrl] = useState("");
    const [isNFTExistsModalOpened, setIsNFTExistsModalOpened] = useState(false);

    const { classes } = useStyles();

    async function onCheckIfNftExistsClick() {
        if (buildTree) {
            const base64Code = getBase64CodeFromBuildTree(buildTree);
            const nftId = await getNFTIdByBase64Code(base64Code);
            setIsNFTExistsModalOpened(true);
            if (nftId > -1) {
                setIsNFTExistsUrl(FRONT_CURRENT_PATH + ":3000/nft/" + nftId);
            } else {
                setIsNFTExistsUrl("");
            }
        }
    }

    return <div>
        <GCTooltip label="Is NFT exists?">
            <div className={classes.iconTop}>
                <GCIconButton primaryReversed onClick={onCheckIfNftExistsClick}
                              icon="question" />
            </div>
        </GCTooltip>

        <Center>
            <Modal
                opened={isNFTExistsModalOpened}
                onClose={() => setIsNFTExistsModalOpened(false)}
                title="NFT on this Build">
                {
                    isNFTExistsUrl
                        ? <Link href={isNFTExistsUrl}>{isNFTExistsUrl}</Link>
                        : <GCText>"Do not exists"</GCText>
                }
            </Modal>
        </Center>
    </div>;
};
