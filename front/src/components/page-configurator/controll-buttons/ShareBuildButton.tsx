import { GCIconButton } from "../../../gc-components/icon-button/GCIconButton";
import { GCTooltip } from "../../../gc-components/tooltip/GCTooltip";
import React, { useState } from "react";
import { Button, Center, Modal } from "@mantine/core";
import { GCText } from "../../../gc-components";
import { useStyles } from "./ControlButtonsStyles";
import { getBuildLinkFromBuildTree } from "../../../services/configuratorService";
import { useBuildTreeStore } from "../../../store/BuildTreeStore";
import { CopyToClipboard } from "react-copy-to-clipboard";

export const ShareBuildButton = () => {

    const { buildTree } = useBuildTreeStore();
    const [currentBuildUrl, setCurrentBuildUrl] = useState("");
    const [copy, setCopy] = useState({ value: "", isCopied: false });
    const [isShareLinkModalOpened, setIsShareLinkModalOpened] = useState(false);

    const { classes } = useStyles();

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

    return <div>
        <GCTooltip label="Share build">
            <div className={classes.iconTop}>
                <GCIconButton primaryReversed onClick={() => onShareYourBuildClick()}
                              icon="share" />
            </div>
        </GCTooltip>

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
    </div>;
};
