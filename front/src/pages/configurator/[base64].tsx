import { Box, MantineProvider } from "@mantine/core";
import { useRouter } from "next/router";
import { Engine } from "../../rendering-engine/components/engine";
import { useGetBuildTreeByBase64Code } from "../../rendering-engine/service/configuratorService";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BuildTree } from "../../rendering-engine/schema/BuildTreeSchema";

const Configurator = ({ testData }) => {
    const router = useRouter();
    const { base64 } = router.query;

    const [data] = useGetBuildTreeByBase64Code(base64 as string);
    const [buildTree, setBuildTree] = useState<BuildTree | null>(null);

    const newGrip = {
        id: 20,
        productId: 20,
        name: "Timber Creek Enforcer Pistol Grip AR",
        productImageUrl: "https://line-f.ru/i/part/1_MIJ4fpT.png",
        description:
            "The Enforcer AR Pistol Grip is a drop in replacement that mounts to any standard mil spec lower receiver. Weighing in at just over 4oz it does not add unnecessary weight to your rifle.",
        brand: "Timber Creek",
        type: "PISTOL_GRIP",
        x: -5,
        y: 54,
        thumbnailImage: "https://line-f.ru/i/part/1_MIJ4fpT.png",
        image: "https://line-f.ru/i/part/1_MIJ4fpT.png",
        width: 486,
        children: [],
    };

    const searchForItem = (buildTree, id, newItem) => {
        let newBuildTree = { ...buildTree };

        let newChildren = buildTree.children?.map((el) => {
            let element = el.id === id ? newItem : el;
            searchForItem(el, id, newItem);
            return element;
        });

        newBuildTree.children = newChildren;
        return newBuildTree;
    };

    const updateGrip = (id, newItem) => {
        const newTree = searchForItem(buildTree, id, newItem);
        setBuildTree(newTree);
    };

    useEffect(() => {
        setBuildTree(data);
    }, [data]);

    return (
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "1rem",
                }}
            >
                {buildTree && <Engine data={buildTree} />}
            </Box>

            <Center>
                <Button onClick={() => updateGrip(10, newGrip)}>Update Grip</Button>
            </Center>

            <Center>
                <Link href={{ pathname: "/summary/" + base64 }}>
                    <Button>To Summary Page</Button>
                </Link>
            </Center>
        </>
    );
};

export async function getServerSideProps() {
    // fetch

    return {
        props: { testData: "test" },
    };
}

export default Configurator;
