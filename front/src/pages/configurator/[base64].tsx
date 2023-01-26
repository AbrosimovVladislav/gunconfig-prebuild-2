import { Box, Button, Center, Group, Modal } from "@mantine/core";
import { useRouter } from "next/router";
import {
    getBuildLinkFromBuildTree,
    getListOfProducts,
    useGetBuildTreeByBase64Code,
} from "../../services/configuratorService";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useEffect, useRef, useState } from "react";
import { useBuildTreeStore } from "../../store/BuildTreeStore";
import GunPartsList from "../../components/page-configurator/gun-part-list/GunPartsList";
import { useClickedGunPartStore } from "../../store/ClickedGunPartStore";
import { GCText } from "../../gc-components";
import * as htmlToImage from "html-to-image";
import { useBuildImageStore } from "../../store/BuildImageStore";
import { useGunPartListCarouselStore } from "../../store/GunPartListCarouselStore";
import { Engine } from "../../components/page-configurator/engine";

export interface ClickedGunPart {
    itemId: number;
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
    const { setClickedGunPart } = useClickedGunPartStore();

    useEffect(() => {
        setBuildTree(data);
        setGunParts(getListOfProducts(data));
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
        setGunParts(getListOfProducts(buildTree));
        setClickedGunPart(null);
    }

    const domEl = useRef(null);

    return (
        <>
            <Box id="domEl" ref={domEl}
                //ToDo move styles from here to styles file
                 sx={{
                     display: "flex",
                     justifyContent: "center",
                     padding: "1rem 0",
                 }}>
                {buildTree && <Engine data={buildTree} />}
            </Box>

            <Center>
                <Button onClick={onShowCurrentPartsClick} color={"teal"}>
                    Show current parts
                </Button>
            </Center>

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

                <Group position="center">
                    <Button onClick={() => onShareYourBuildClick()}>Share My Build</Button>
                </Group>
            </Center>

            <Center>
                <Button onClick={onSummaryClick} color={"teal"}>
                    Build Summary
                </Button>
            </Center>
        </>
    );
};

export default Configurator;
