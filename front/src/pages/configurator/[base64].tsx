import { Box, Button, Center, Modal } from "@mantine/core";
import { useRouter } from "next/router";
import {
    getBase64CodeFromBuildTree,
    getBuildLinkFromBuildTree,
    mapBuildTreeToProducts,
} from "../../services/configuratorService";
import { CopyToClipboard } from "react-copy-to-clipboard";
import React, { useEffect, useRef, useState } from "react";
import { useBuildTreeStore } from "../../store/BuildTreeStore";
import GunPartsList from "../../components/page-configurator/gun-part-list/GunPartsList";
import { useClickedGunPartStore } from "../../store/ClickedGunPartStore";
import { GCText } from "../../gc-components";
import * as htmlToImage from "html-to-image";
import { useBuildImageStore } from "../../store/BuildImageStore";
import { useGunPartListCarouselStore } from "../../store/GunPartListCarouselStore";
import { Engine } from "../../components/page-configurator/engine";
import { GCIconButton } from "../../gc-components/icon-button/GCIconButton";
import { useStyles } from "./ConfiguratorStyles";
import Link from "next/link";
import { FRONT_CURRENT_PATH } from "../../config/env-paths";
import { GCTooltip } from "../../gc-components/tooltip/GCTooltip";
import { useGetBuildTreeByBase64Code } from "../../services/client/configuratorClient";
import { getNFTIdByBase64Code } from "../../services/client/nftClient";

export interface ClickedGunPart {
    itemId: number;
    productId: number;
    parentId: number;
    type: string;
}

const Configurator = () => {
    const router = useRouter();
    const { base64 } = router.query;

    const [data] = useGetBuildTreeByBase64Code(base64 as string);
    const { buildTree, setBuildTree } = useBuildTreeStore();
    const { setBuildImage } = useBuildImageStore();

    const [currentBuildUrl, setCurrentBuildUrl] = useState("");
    const [isShareLinkModalOpened, setIsShareLinkModalOpened] = useState(false);
    const [copy, setCopy] = useState({ value: "", isCopied: false });
    const { setGunParts } = useGunPartListCarouselStore();
    const { clickedGunPart, setClickedGunPart } = useClickedGunPartStore();

    const [isNFTExistsModalOpened, setIsNFTExistsModalOpened] = useState(false);
    const [isNFTExistsUrl, setIsNFTExistsUrl] = useState("");

    useEffect(() => {
        setBuildTree(data);
        setGunParts(mapBuildTreeToProducts(data));
    }, [data]);

    function onShareYourBuildClick() {
        const url = getBuildLinkFromBuildTree(buildTree);
        setCurrentBuildUrl(url);
        setIsShareLinkModalOpened(true);
    }

    function onCopyLinkClick(textToCopy: string) {
        setCopy({ value: textToCopy, isCopied: true });
        setTimeout(() => {
            setIsShareLinkModalOpened(false);
            setCopy({ value: "", isCopied: false });
        }, 750);
    }

    async function onSummaryClick() {
        const buildImageData = await htmlToImage.toPng(domEl.current);
        setBuildImage(buildImageData);
        setClickedGunPart(null);
        router.push("/summary");
    }

    function onShowCurrentPartsClick() {
        setGunParts(mapBuildTreeToProducts(buildTree));
        setClickedGunPart(null);
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

    async function onResetToInitialBuildClick() {
        router.reload();
    }

    const domEl = useRef(null);
    const { classes } = useStyles();

    return (
        <>
            <Box id="domEl" ref={domEl} className={classes.box}>
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
                {buildTree && <Engine data={buildTree} />}
            </Box>
            <GunPartsList />

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
                <Button onClick={onSummaryClick} color={"purple"}>
                    Build Summary
                </Button>
            </Center>
        </>
    );
};

export default Configurator;
