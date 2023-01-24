import { Button, Center } from "@mantine/core";
import { Product } from "../../schema/NFTCatalogSchema";
import { useBuildTreeStore } from "../../rendering-engine/store/BuildTreeStore";
import React, { useEffect, useState } from "react";
import GunPartCard from "../../components/gun-part-card/GunPartCard";
import Catalog from "../../components/catalog/Catalog";
import {
    getBase64CodeByBuildTree,
    getListOfBuildTreeProducts,
    useCreateNFTRequest,
} from "../../rendering-engine/service/configuratorService";
import { useBuildImageStore } from "../../rendering-engine/store/BuildImageStore";
import Image from "next/image";
import { CreateNFTRequest } from "../../rendering-engine/schema/CreateNFTRequestSchema";
import { GCLink, GCText } from "../../gc-components";
import { FRONT_CURRENT_PATH } from "../../config/env-paths";
import { useRouter } from "next/router";
import { getNFTIdByBase64Code } from "../../services/nftService";

const BuildSummary = ({}) => {

    const { buildTree } = useBuildTreeStore();
    const { buildImage } = useBuildImageStore();
    const [products, setProducts] = useState<Product[]>([]);
    const [base64Code, setBase64Code] = useState<string>();
    const { nftId } = getNFTIdByBase64Code(base64Code);
    const router = useRouter();

    useEffect(() => {
        const productsList: Product[] = getListOfBuildTreeProducts(buildTree);
        setProducts(productsList);
        const code = getBase64CodeByBuildTree(buildTree);
        setBase64Code(code);
    }, [buildTree]);

    async function onMintNFTClick() {
        if (buildImage && buildTree) {
            const base64Code = getBase64CodeByBuildTree(buildTree);
            const nftCreateRequest: CreateNFTRequest = {
                buildImage: buildImage,
                base64Code: base64Code,
                collection: "AutomaticallyCreated",
                firstOwner: "BelChelovek",
                name: "AC-" + Math.floor(Math.random() * 100).toString() + Math.floor(Math.random() * 100).toString(),
                mintingPrice: 0.50,
            };
            const response = await useCreateNFTRequest(nftCreateRequest);
            await router.push(FRONT_CURRENT_PATH + ":3000/nft/" + response.nftCardId);
        }
    }

    return (
        <div>
            Build Summary Page
            <Center>
                {buildImage && <Image unoptimized width={1080} height={300} src={buildImage} />}
            </Center>
            <Catalog>
                {products?.map((product: Product) => (
                    <GunPartCard product={product} key={product.productId} />
                ))}
            </Catalog>
            <Center>
                {nftId && nftId !== -1 &&
                    <GCLink href={FRONT_CURRENT_PATH + ":3000/nft/" + nftId}>
                        <GCText primary>NFT for this build already exists</GCText>
                    </GCLink>}
            </Center>
            <Center>
                <Button disabled={nftId && nftId !== -1} onClick={onMintNFTClick}>
                    Mint NFT
                </Button>
            </Center>
        </div>
    );
};

export default BuildSummary;
