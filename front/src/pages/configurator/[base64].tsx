import { Box, Button, Center, Grid } from "@mantine/core";
import { useRouter } from "next/router";
import { Engine } from "../../rendering-engine/components/engine";
import {
    useGetBuildTreeByBase64Code,
    useGetGunPartsByParentAndType,
} from "../../rendering-engine/service/configuratorService";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useBuildTreeStore } from "../../rendering-engine/store/BuildTreeStore";
import GunPartList from "./components/gun-part-list";

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

    const [clickedGunPart, setClickedGunPart] = useState<ClickedGunPart | null>(null);

    useEffect(() => {
        setBuildTree(data);
    }, [data]);

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "1rem",
                }}
            >
                {buildTree && <Engine data={buildTree} setClickedGunPart={setClickedGunPart} />}
            </Box>

            {clickedGunPart && <GunPartList clickedGunPart={clickedGunPart} setClickedGunPart={setClickedGunPart} />}

            <Center>
                <Link href={{ pathname: "/summary/" + base64 }}>
                    <Button>To Summary Page</Button>
                </Link>
            </Center>
        </>
    );
};

export default Configurator;
