import { GCTooltip } from "../../../gc-components/tooltip/GCTooltip";
import { GCIconButton } from "../../../gc-components/icon-button/GCIconButton";
import React, { useState } from "react";
import {
    getBase64CodeFromBuildTree,
    getBuildLinkFromBuildTree,
    mapBuildTreeToProducts,
} from "../../../services/configuratorService";
import { getNFTIdByBase64Code } from "../../../services/client/nftClient";
import { FRONT_CURRENT_PATH } from "../../../config/env-paths";
import { Button, Center, Modal } from "@mantine/core";
import { GCText } from "../../../gc-components";
import Link from "next/link";
import { useClickedGunPartStore } from "../../../store/ClickedGunPartStore";
import { useBuildTreeStore } from "../../../store/BuildTreeStore";
import { useGunPartListCarouselStore } from "../../../store/GunPartListCarouselStore";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useRouter } from "next/router";
import { useStyles } from "./ControlButtonsStyles";


const ControlButtons = () => {

    const router = useRouter();

    const { clickedGunPart, setClickedGunPart } = useClickedGunPartStore();
    const { buildTree } = useBuildTreeStore();
    const { setGunParts } = useGunPartListCarouselStore();

    const [isResetToInitialBuildModalOpened, setIsResetToInitialBuildModalOpened] = useState(false);
    const [isShareLinkModalOpened, setIsShareLinkModalOpened] = useState(false);
    const [isNFTExistsModalOpened, setIsNFTExistsModalOpened] = useState(false);

    const [isNFTExistsUrl, setIsNFTExistsUrl] = useState("");
    const [currentBuildUrl, setCurrentBuildUrl] = useState("");
    const [copy, setCopy] = useState({ value: "", isCopied: false });

    const { classes } = useStyles();

    async function onResetToInitialBuildClick() {
        setIsResetToInitialBuildModalOpened(true);
    }

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

    function onShareYourBuildClick() {
        const url = getBuildLinkFromBuildTree(buildTree);
        setCurrentBuildUrl(url);
        setIsShareLinkModalOpened(true);
    }

    function onShowCurrentPartsClick() {
        setGunParts(mapBuildTreeToProducts(buildTree));
        setClickedGunPart(null);
    }

    function onCopyLinkClick(textToCopy: string) {
        setCopy({ value: textToCopy, isCopied: true });
        setTimeout(() => {
            setIsShareLinkModalOpened(false);
            setCopy({ value: "", isCopied: false });
        }, 750);
    }

    return <>
        <div className={classes.actions}>
            <GCTooltip label="Return to initial build">
                <div className={classes.iconTop}>
                    <GCIconButton primaryReversed onClick={onResetToInitialBuildClick}
                                  icon="refresh" />
                </div>
            </GCTooltip>
            <GCTooltip label="Is NFT exists?">
                <div className={classes.iconTop}>
                    <GCIconButton primaryReversed onClick={onCheckIfNftExistsClick}
                                  icon="question" />
                </div>
            </GCTooltip>
            <GCTooltip label="Share build">
                <div className={classes.iconTop}>
                    <GCIconButton primaryReversed onClick={() => onShareYourBuildClick()}
                                  icon="share" />
                </div>
            </GCTooltip>
            <div className={classes.iconBottom}>
                <GCIconButton primary={clickedGunPart == null}
                              primaryReversed={clickedGunPart !== null}
                              onClick={onShowCurrentPartsClick} icon="eye" />
            </div>
        </div>

        <Center>
            <Modal
                opened={isShareLinkModalOpened}
                onClose={() => setIsShareLinkModalOpened(false)}
                title="Link to your build">
                <GCText>
                    {currentBuildUrl}
                </GCText>
                <Center>
                    <CopyToClipboard text={currentBuildUrl}
                                     onCopy={() => onCopyLinkClick(currentBuildUrl)}>
                        <Button color={copy.isCopied ? "teal" : "blue"}>
                            {copy.isCopied ? "Copied url" : "Copy url"}
                        </Button>
                    </CopyToClipboard>
                </Center>
            </Modal>
        </Center>

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
    </>;
};

export default ControlButtons;
