import {Box, Button, Center} from "@mantine/core";
import {useRouter} from "next/router";
import {Engine} from "../../rendering-engine/components/engine";
import {useGetBuildTreeByBase64Code} from "../../rendering-engine/service/configuratorService";
import Link from "next/link";
import {useEffect} from "react";
import {useBuildTreeStore} from "../../rendering-engine/store/BuildTreeStore";
import GunPartList from "../../rendering-engine/components/gun-part-list";
import {useClickedGunPartStore} from "../../rendering-engine/store/ClickedGunPartStore";

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

    const {clickedGunPart} = useClickedGunPartStore();

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
                {buildTree && <Engine data={buildTree}/>}
            </Box>

            {clickedGunPart && <GunPartList/>}

            <Center>
                <Link href={{pathname: "/summary/" + base64}}>
                    <Button>To Summary Page</Button>
                </Link>
            </Center>
        </>
    );
};

export default Configurator;
