import {Background} from "../schema/nft/Background";
import {BuildTree} from "../schema/configurator/BuildTree";
import {getCollectionName, getRarity} from "./nftService";
import {findBackgroundByCollectionAndRarity} from "./client/nftClient";

export interface ImageSize {
  width: number;
  height: number;
}

export function getImageSizeFromBase64(base64: string): Promise<ImageSize> {
  return new Promise((resolve, reject) => {
    const image = new (window as any).Image();
    image.onload = () => {
      const size: ImageSize = {
        width: image.width,
        height: image.height
      };
      resolve(size);
    };
    image.onerror = () => {
      reject(new Error('Failed to load image'));
    };
    const binaryData = window.atob(base64.split(',')[1]);
    const imageData = new Uint8Array(binaryData.length);
    for (let i = 0; i < binaryData.length; i++) {
      imageData[i] = binaryData.charCodeAt(i);
    }
    const blob = new Blob([imageData], {type: 'image/png'});
    const url = URL.createObjectURL(blob);
    image.src = url;
  });
}

export async function prepareNFTImage(buildTree: BuildTree, buildImage: string, gunBuildRatio: number,
                                      collectionName?: string, rarityName?: string) {
  if (buildTree && buildImage) {
    const resultCollection = collectionName ? collectionName : getCollectionName(buildTree.name);
    const resultRarity = rarityName ? rarityName : getRarity();
    const background: Background = await getBackgroundByCollectionAndRarity(resultCollection, resultRarity)
    const finalNFTImage = await convertToBase64(background.backgroundUrl)
    .then(async image => {
      const gunHeight = background.gunWidth / gunBuildRatio;
      return await mergeImages(image, buildImage, background.gunPlaceholderXCoordinate, background.gunPlaceholderYCoordinate, background.gunWidth, gunHeight);
    })

    return {finalNFTImage, backgroundId: background.backgroundId};
  }
}

async function getBackgroundByCollectionAndRarity(collection: string, rarity: string): Promise<Background> {
  const background: Background = await findBackgroundByCollectionAndRarity(collection, rarity);
  return background;
}

const mergeImages = async (imageSrc1: string, imageSrc2: string, xCoordinate: number, yCoordinate: number, gunWidth, gunHeight): Promise<string> => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const image1 = new Image();
  image1.src = imageSrc1;

  const image2 = new Image();
  image2.src = imageSrc2;

  await Promise.all([
    new Promise((resolve) => {
      image1.onload = resolve;
    }),
    new Promise((resolve) => {
      image2.onload = resolve;
    }),
  ]);

  canvas.width = image1.width;
  canvas.height = image1.height;

  ctx.drawImage(image1, 0, 0);
  ctx.drawImage(image2, xCoordinate, yCoordinate, gunWidth, gunHeight);

  return canvas.toDataURL();
};

const convertToBase64 = (url): Promise<string> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.setAttribute('crossOrigin', 'anonymous');
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      const dataURL = canvas.toDataURL('image/png');
      resolve(dataURL);
    };
    img.onerror = reject;
    img.src = url;
  });
};