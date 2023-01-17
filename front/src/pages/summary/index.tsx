import { BuildTree } from "../../rendering-engine/schema/BuildTreeSchema";
import { Button, Center } from "@mantine/core";
import { Product } from "../../schema/NFTCatalogSchema";
import { useBuildTreeStore } from "../../rendering-engine/store/BuildTreeStore";
import React, { useEffect, useState } from "react";
import GunPartCard from "../../components/gun-part-card/GunPartCard";
import Catalog from "../../components/catalog/Catalog";
import {
    getBase64CodeByBuildTree,
    getBuildLinkFromBuildTree,
    isBuildAlreadyExists,
    useCreateNFTRequest,
} from "../../rendering-engine/service/configuratorService";
import { useBuildImageStore } from "../../rendering-engine/store/BuildImageStore";
import Image from "next/image";
import { CreateNFTRequest } from "../../rendering-engine/schema/CreateNFTRequestSchema";
import { GCLink } from "../../gc-components";
import { FRONT_CURRENT_PATH } from "../../config/env-paths";

const BuildSummary = ({}) => {

    const { buildTree } = useBuildTreeStore();
    const { buildImage } = useBuildImageStore();
    const [products, setProducts] = useState<Product[]>([]);
    const [buildLink, setBuildLink] = useState("");
    const [alreadyMintedNft, setAlreadyMintedNft] = useState();
    const [base64BuildCode, setBase64BuildCode] = useState<string>();
    const { data, isLoading, isError, isSuccess } = isBuildAlreadyExists(base64BuildCode);

    useEffect(() => {
        const productsList: Product[] = getListOfBuildTreeProducts(buildTree);
        setProducts(productsList);
        const link = getBuildLinkFromBuildTree(buildTree);
        setBuildLink(link);
        const code = getBase64CodeByBuildTree(buildTree);
        setBase64BuildCode(code);
    }, [buildTree]);

    useEffect(() => {
        console.log("data");
        console.log(data);
    }, [data]);

    function getListOfBuildTreeProducts(buildTree: BuildTree): Product[] {
        if (!buildTree) return null;
        let products = [];
        getChildrenProductsRecursively(buildTree, products);
        return products;
    }

    function getChildrenProductsRecursively(buildTree: BuildTree, products: Product[]) {
        products.push(mapBuildTreeToProducts(buildTree));
        if (buildTree.children && buildTree.children.length > 0) {
            buildTree.children.forEach(child => getChildrenProductsRecursively(child, products));
        }
    }

    function mapBuildTreeToProducts(buildTree: BuildTree): Product {
        return {
            productId: buildTree.id,
            name: buildTree.name,
            productImageUrl: buildTree.image,
            description: buildTree.description,
            brand: buildTree.brand,
            type: buildTree.type,
        };
    }

    async function onMintNFTClick() {
        if (buildImage && buildTree) {
            const base64Code = getBase64CodeByBuildTree(buildTree);
            const nftCreateRequest: CreateNFTRequest = {
                buildImage: buildImage,
                base64Code: base64Code,
                collection: "AutomaticallyCreated",
                firstOwner: "BelChelovek",
                name: "AR-15-AC" + Math.floor(Math.random() * 100).toString() + Math.floor(Math.random() * 100).toString(),
                mintingPrice: 0.50,
            };
            const response = await useCreateNFTRequest(nftCreateRequest);
            console.log(response);
        }
    }

    return (
        <div>
            Build Summary Page
            <Center>
                {buildImage && <Image unoptimized width={1080} height={300} src={buildImage} />}
            </Center>
            <Center>
                {data && !data.value.includes("false") &&
                    <GCLink href={FRONT_CURRENT_PATH + ":3000/" + data.value}>This gun exists</GCLink>}
            </Center>
            <Catalog>
                {products?.map((product: Product) => (
                    <GunPartCard product={product} key={product.productId} />
                ))}
            </Catalog>
            <Center>
                <Button onClick={onMintNFTClick}>
                    Mint NFT
                </Button>
            </Center>
        </div>
    );
};

export default BuildSummary;
