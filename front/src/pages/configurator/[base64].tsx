import {Box, Button, Center, Group, Modal} from "@mantine/core";
import {useRouter} from "next/router";
import {Engine} from "../../rendering-engine/components/engine";
import {
    getBuildLinkFromBuildTree,
    useGetBuildTreeByBase64Code
} from "../../rendering-engine/service/configuratorService";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {useEffect, useRef, useState} from "react";
import {useBuildTreeStore} from "../../rendering-engine/store/BuildTreeStore";
import GunPartsList from "../../rendering-engine/components/gun-part-list/GunPartsList";
import {useClickedGunPartStore} from "../../rendering-engine/store/ClickedGunPartStore";
import {GCText} from "../../gc-components";
import * as htmlToImage from 'html-to-image';
import {useBuildImageStore} from "../../rendering-engine/store/BuildImageStore";

export interface ClickedGunPart {
    itemId: number;
    parentId: number;
    type: string;
}

const Configurator = () => {
    const router = useRouter();
    const {base64} = router.query;

    const [data] = useGetBuildTreeByBase64Code(base64 as string);
    const {buildTree, setBuildTree} = useBuildTreeStore();
    const {setBuildImage} = useBuildImageStore();
    const [currentBuildUrl, setCurrentBuildUrl] = useState("");
    const [isShareLinkModalOpened, setIsShareLinkModalOpened] = useState(false);
    const [copy, setCopy] = useState({value: '', isCopied: false});

    const {clickedGunPart} = useClickedGunPartStore();


    useEffect(() => {
        setBuildTree(data);
    }, [data]);

    function onShareYourBuildClick() {
        const url = getBuildLinkFromBuildTree(buildTree);
        setCurrentBuildUrl(url);
        setIsShareLinkModalOpened(true)
    }

    function onCopyLinkClick(textToCopy: string) {
        setCopy({value: textToCopy, isCopied: true});
        setTimeout(() => {
            setIsShareLinkModalOpened(false);
            setCopy({value: '', isCopied: false})
        }, 750)
    }

    async function onSummaryClick() {
        //build image +++
        //list of used gun products +++
        //gun description
        //link with base64code +++
        const buildImageData = await htmlToImage.toPng(domEl.current);
        setBuildImage(buildImageData)
        router.push('/summary')
    }

    const domEl = useRef(null);

    const downloadImage = async () => {
        const dataUrl = await htmlToImage.toPng(domEl.current);
        console.log(dataUrl)

        // download image
        const link = document.createElement('a');
        link.download = "html-to-img.png";
        link.href = dataUrl;
        link.click();
    }

    return (
        <>
            <Box id="domEl" ref={domEl}
                //ToDo move styles from here to styles file
                 sx={{
                     display: "flex",
                     justifyContent: "center",
                     padding: "1rem 0",
                 }}
            >
                {buildTree && <Engine data={buildTree}/>}
            </Box>

            {clickedGunPart && <GunPartsList/>}

            <Center>
                <Modal
                    opened={isShareLinkModalOpened}
                    onClose={() => setIsShareLinkModalOpened(false)}
                    title="Link to your build">
                    <GCText>
                        {currentBuildUrl}
                    </GCText>
                    <Center>
                        <CopyToClipboard text={currentBuildUrl} onCopy={() => onCopyLinkClick(currentBuildUrl)}>
                            <Button color={copy.isCopied ? 'teal' : 'blue'}>
                                {copy.isCopied ? 'Copied url' : 'Copy url'}
                            </Button>
                        </CopyToClipboard>

                    </Center>
                </Modal>

                <Group position="center">
                    <Button onClick={() => onShareYourBuildClick()}>Share My Build</Button>
                </Group>
            </Center>

            <Center>
                <Button onClick={onSummaryClick} color={'teal'}>
                    Build Summary
                </Button>
            </Center>
            <Center>
                <Button onClick={downloadImage} color={'red'}>
                    Picture
                </Button>
            </Center>
        </>
    );
};

export default Configurator;
