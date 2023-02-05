import {Background} from "../schema/nft/Background";

const gunWidth = 4000;
const gunHeight = 855;

export function getBackgroundByCollectionAndRarity(collection:string, rarity:string) : Background{
  return {
    backgroundUrl: "https://gunmarket.fra1.digitaloceanspaces.com/pexels-fwstudio-129731.jpg",
    gunPlaceholderXCoordinate: -650,
    gunPlaceholderYCoordinate: 1000
  }
}

export const mergeImages = async (imageSrc1:string, imageSrc2:string, xCoordinate:number, yCoordinate:number) : Promise<string> => {
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
  ctx.drawImage(image2, xCoordinate, yCoordinate, gunWidth,gunHeight);

  return canvas.toDataURL();
};

export const convertToBase64 = (url) : Promise<string> => {
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