import {Box, Button, Center, CopyButton, Group, Modal, Popover} from "@mantine/core";
import {useRouter} from "next/router";
import {Engine} from "../../rendering-engine/components/engine";
import {
    getBuildLinkFromBuildTree,
    useGetBuildTreeByBase64Code
} from "../../rendering-engine/service/configuratorService";
import {useEffect, useState} from "react";
import {useBuildTreeStore} from "../../rendering-engine/store/BuildTreeStore";
import GunPartList from "../../rendering-engine/components/gun-part-list/gun-part-list";
import {useClickedGunPartStore} from "../../rendering-engine/store/ClickedGunPartStore";
import {GCText} from "../../gc-components";
import {useClipboard} from "@mantine/hooks";

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
    const [currentBuildUrl, setCurrentBuildUrl] = useState("");
    const [isShareLinkModalOpened, setIsShareLinkModalOpened] = useState(false);
    const [copied, setCopied] = useState(false);

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
        navigator.clipboard.writeText(textToCopy);
        setCopied(true);
        setTimeout(() => {
            setIsShareLinkModalOpened(false);
        }, 750)
    }

    return (
        <>
            <Box
                //ToDo move styles from here to styles file
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "1rem 0",
                }}
            >
                {buildTree && <Engine data={buildTree}/>}
            </Box>

            {clickedGunPart && <GunPartList/>}

            <Center>
                <Modal
                    opened={isShareLinkModalOpened}
                    onClose={() => setIsShareLinkModalOpened(false)}
                    title="Link to your build">
                    <GCText>
                        {currentBuildUrl}
                    </GCText>
                    <Center>
                        <Button color={copied ? 'teal' : 'blue'}
                                onClick={() => {
                                    onCopyLinkClick(currentBuildUrl)
                                }}>
                            {copied ? 'Copied url' : 'Copy url'}
                        </Button>
                    </Center>
                </Modal>

                <Group position="center">
                    <Button onClick={() => onShareYourBuildClick()}>Share My Build</Button>
                </Group>
            </Center>
        </>
    );
};

export default Configurator;
