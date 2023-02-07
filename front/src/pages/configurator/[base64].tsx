import { Box, Button, Center } from "@mantine/core";
import { useRouter } from "next/router";
import { mapBuildTreeToProducts } from "../../services/configuratorService";
import React, { useEffect, useRef } from "react";
import { useBuildTreeStore } from "../../store/BuildTreeStore";
import GunPartsList from "../../components/page-configurator/gun-part-list/GunPartsList";
import { useClickedGunPartStore } from "../../store/ClickedGunPartStore";
import * as htmlToImage from "html-to-image";
import { useBuildImageStore } from "../../store/BuildImageStore";
import { useGunPartListStore } from "../../store/GunPartListStore";
import { Engine } from "../../components/page-configurator/engine";
import { useStyles } from "./ConfiguratorStyles";
import { useGetBuildTreeByBase64Code } from "../../services/client/configuratorClient";
import ControlButtons from "../../components/page-configurator/controll-buttons/ControlButtons";

const Configurator = () => {
    const router = useRouter();
    const { base64 } = router.query;
    const { initialBuildTree } = useGetBuildTreeByBase64Code(base64 as string);

    const { buildTree, setBuildTree } = useBuildTreeStore();
    const { setBuildImage } = useBuildImageStore();
    const { setGunParts } = useGunPartListStore();
    const { setClickedGunPart } = useClickedGunPartStore();

    useEffect(() => {
        setBuildTree(initialBuildTree);
        setGunParts(mapBuildTreeToProducts(initialBuildTree));
    }, [initialBuildTree]);

    async function onSummaryClick() {
        const buildImageData = await htmlToImage.toPng(domEl.current);
        setBuildImage(buildImageData);
        setClickedGunPart(null);
        router.push("/summary");
    }

    const domEl = useRef(null);
    const { classes } = useStyles();

    return (
        <>
            <Box className={classes.box}>
                <ControlButtons />
                {buildTree && <div id="domEl" ref={domEl} className={classes.engine}>
                    <Engine data={buildTree} />
                </div>}
            </Box>
            <GunPartsList />

            <Center>
                <Button onClick={onSummaryClick} color={"purple"}>
                    Build Summary
                </Button>
            </Center>
        </>
    );
};

export default Configurator;
