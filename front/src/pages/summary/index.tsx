import { Button, Center } from "@mantine/core";
import { useBuildTreeStore } from "../../store/BuildTreeStore";
import React, { useEffect, useState } from "react";
import GunPartCard from "../../components/common/gun-part-card/GunPartCard";
import Catalog from "../../components/common/catalog/Catalog";
import {
    getBase64CodeFromBuildTree,
    mapBuildTreeToProducts,
} from "../../services/configuratorService";
import { useBuildImageStore } from "../../store/BuildImageStore";
import Image from "next/image";
import { CreateNFTRequest } from "../../schema/common/CreateNFTRequest";
import { GCLink, GCText } from "../../gc-components";
import { FRONT_CURRENT_PATH } from "../../config/env-paths";
import { useRouter } from "next/router";
import { Product } from "../../schema/common/Product";
import { getCurrentUserName } from "../../services/authService";
import { getNameForNewNFTByRandom } from "../../services/randomService";
import { calculateNFTPrice } from "../../services/priceService";
import { useCreateNFT, useGetNFTIdByBase64Code } from "../../services/client/nftClient";

const BuildSummary = ({}) => {

    const { buildTree } = useBuildTreeStore();
    const { buildImage } = useBuildImageStore();
    const [products, setProducts] = useState<Product[]>([]);
    const [base64Code, setBase64Code] = useState<string>();
    const { nftId } = useGetNFTIdByBase64Code(base64Code);
    const router = useRouter();

    useEffect(() => {
        const productsList: Product[] = mapBuildTreeToProducts(buildTree);
        setProducts(productsList);
        const code = getBase64CodeFromBuildTree(buildTree);
        setBase64Code(code);
    }, [buildTree]);

    async function onMintNFTClick() {
        if (buildImage && buildTree) {
            const base64Code = getBase64CodeFromBuildTree(buildTree);
            const collectionName = "GC " + buildTree.name;
            const nftCreateRequest: CreateNFTRequest = {
                buildImage: buildImage,
                base64Code: base64Code,
                collection: collectionName,
                firstOwner: getCurrentUserName(),
                name: getNameForNewNFTByRandom(collectionName),
                mintingPrice: calculateNFTPrice(),
                rarity: "USUAL",
            };
            const response = await useCreateNFT(nftCreateRequest);
            await router.push(FRONT_CURRENT_PATH + ":3000/nft/" + response.nftCardId);
        }
    }

    return (
        <div>
            Build Summary Page
            <Center>
                {buildImage && <Image unoptimized width={1080} height={300} src={buildImage} />}
            </Center>
            <Center>
                <GCLink href={FRONT_CURRENT_PATH + ":3000/configurator/" + base64Code}>
                    <Button disabled={!base64Code}>
                        Return to configure
                    </Button>
                </GCLink>
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
