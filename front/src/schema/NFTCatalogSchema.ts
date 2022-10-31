export interface NFTCard {
    id: number;
    nftName: string;
    productId: number;
    productName: string;
    nftImageUrl: string;
    build: Build;
}

export interface Build {
    rootGun: GunPart;
    gunParts: GunPart[];
}

export interface GunPart {
    gunPartId: number;
    productId: number;
    productName: string;
    productType: string;
    imageUrl: string;
}
