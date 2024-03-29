import {Button, Center, Modal, Select} from "@mantine/core";
import {useBuildTreeStore} from "../../store/BuildTreeStore";
import React, {useEffect, useState} from "react";
import GunPartCard from "../../components/common/gun-part-card/GunPartCard";
import Catalog from "../../components/common/catalog/Catalog";
import {
  getBase64CodeFromBuildTree,
  mapBuildTreeToProducts,
} from "../../services/configuratorService";
import {useBuildImageStore} from "../../store/BuildImageStore";
import Image from "next/image";
import {CreateNFTRequest} from "../../schema/common/CreateNFTRequest";
import {GCLink, GCText} from "../../gc-components";
import {FRONT_CURRENT_PATH} from "../../config/env-paths";
import {useRouter} from "next/router";
import {Product} from "../../schema/common/Product";
import {getCurrentUserName} from "../../services/authService";
import {getNameForNewNFTByRandom} from "../../services/randomService";
import {calculateNFTPrice} from "../../services/priceService";
import {useCreateNFT, useGetNFTIdByBase64Code} from "../../services/client/nftClient";
import {NextResponse} from "next/server";
import {getImageSizeFromBase64, prepareNFTImage} from "../../services/imageService";
import {getCollectionName, getRarity} from "../../services/nftService";

const BuildSummary = ({}) => {

  const {buildTree} = useBuildTreeStore();
  const {buildImage} = useBuildImageStore();
  const [nftImage, setNftImage] = useState<string>();
  const [backgroundId, setBackgroundId] = useState<string>();
  const [products, setProducts] = useState<Product[]>([]);
  const [base64Code, setBase64Code] = useState<string>();
  const [collectionName, setCollectionName] = useState<string>(null);
  const [rarityName, setRarityName] = useState<string>("USUAL");
  const {nftId} = useGetNFTIdByBase64Code(base64Code);
  const router = useRouter();

  const [isMintingInProcess, setIsMintingInProcess] = useState(false);
  const [isMintingModalOpened, setIsMintingModalOpened] = useState(false);

  useEffect(() => {
    if (buildTree) {
      const productsList: Product[] = mapBuildTreeToProducts(buildTree);
      setProducts(productsList);
      const code = getBase64CodeFromBuildTree(buildTree);
      setBase64Code(code);
    }
  }, [buildTree]);

  async function mintNft() {
    if (buildImage && buildTree && nftImage) {
      setIsMintingInProcess(true);
      const base64Code = getBase64CodeFromBuildTree(buildTree);
      const resultCollectionName = collectionName ? collectionName : getCollectionName(buildTree.name);
      const nftCreateRequest: CreateNFTRequest = {
        //ToDo rename to nftImage in model
        buildImage: nftImage ? nftImage : buildImage,
        base64Code: base64Code,
        collection: resultCollectionName,
        firstOwner: getCurrentUserName(),
        name: getNameForNewNFTByRandom(resultCollectionName),
        mintingPrice: calculateNFTPrice(),
        rarity: rarityName ? rarityName : getRarity(),
        backgroundId: backgroundId ? backgroundId : "-1L"
      };
      const response = await useCreateNFT(nftCreateRequest);
      setIsMintingModalOpened(false);
      await router.push(FRONT_CURRENT_PATH + ":3000/nft/" + response.nftCardId);
    }
  }

  async function onMintNFTClick() {
    const gunBuildRatio: number = await getImageSizeFromBase64(buildImage)
    .then(size => size.width / size.height);
    const {finalNFTImage, backgroundId} = await prepareNFTImage(
        buildTree, buildImage, gunBuildRatio, collectionName, rarityName);
    setNftImage(finalNFTImage);
    setBackgroundId(backgroundId);
    setIsMintingModalOpened(true);
  }

  //ToDo refactor this in Summary Page refactoring
  if (!buildTree) {
    NextResponse.redirect(FRONT_CURRENT_PATH + ":3000/");
  }

  return (
      <div>
        <GCText h2 bold align="center" sx={{margin: "20px 0 auto"}}>Build Summary</GCText>
        <Center>
          {buildImage && <Image unoptimized width={2728} height={672} src={buildImage}/>}
        </Center>
        <Center>
          <GCLink href={FRONT_CURRENT_PATH + ":3000/configurator/" + base64Code}>
            <Button disabled={!base64Code} sx={{margin: "20px auto"}}>
              Return to configure
            </Button>
          </GCLink>
        </Center>
        <Catalog>
          {products?.map((product: Product) => (
              <GunPartCard product={product} key={product.productId}/>
          ))}
        </Catalog>
        <Center>
          {nftId && nftId !== -1 &&
              <GCLink href={FRONT_CURRENT_PATH + ":3000/nft/" + nftId}>
                <GCText primary sx={{margin: "20px 0 auto"}}>NFT for this build already
                  exists</GCText>
              </GCLink>}
        </Center>
        <Center>
          <Select
              label="Choose collection for image"
              placeholder="Pick one"
              value={collectionName}
              onChange={setCollectionName}
              data={[
                {value: 'GC-Origin', label: 'GC-Origin'},
                {value: 'GC-SIMPLE', label: 'GC-SIMPLE'},
                {value: 'GC-Origin-Mirror', label: 'GC-Origin-Mirror'},
                {value: 'GC-Origin-Metal', label: 'GC-Origin-Metal'},
                {value: 'GC-Origin-Extra-Mirror', label: 'GC-Origin-Extra-Mirror'},
              ]}
          />
          <Select
              label="Choose rarity for image"
              placeholder="Pick one"
              value={rarityName}
              onChange={setRarityName}
              data={[
                {value: 'USUAL', label: 'USUAL'},
                {value: 'UNUSUAL', label: 'UNUSUAL'},
                {value: 'RARE', label: 'RARE'},
                {value: 'EPIC', label: 'EPIC'},
                {value: 'LEGENDARY', label: 'LEGENDARY'},
              ]}
          />
        </Center>
        <Center>
          <Button disabled={nftId && nftId !== -1} onClick={onMintNFTClick}
                  sx={{margin: "20px auto"}}>
            Mint NFT
          </Button>
        </Center>
        <Center>
          <Modal
              opened={isMintingModalOpened}
              onClose={() => setIsMintingModalOpened(false)}
              title="NFT Minting Preview">
            {
              <div>
                <Center>
                  {nftImage && <Image unoptimized width={400} height={400} src={nftImage}/>}
                </Center>
                <Center>
                  <Button onClick={mintNft}
                          color={"teal"} sx={{margin: "20px auto"}}>
                    Mint NFT
                  </Button>
                </Center>
                <div hidden={!isMintingInProcess}>
                  <GCText>Loading ...</GCText>
                </div>

              </div>
            }
          </Modal>
        </Center>

      </div>
  );
};

export default BuildSummary;
