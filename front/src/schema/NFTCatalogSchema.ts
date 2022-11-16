export interface NFTCard {
    nftCardId: number;
    name: string;
    buildId: number;
    nftImageUrl: string;
    collection: string;
    mintingPrice: number;
    rarity: string;
    mintingDate: string;
    firstOwner: string;
    gunDescription: string;
    properties: Product[];
}

export interface Product {
    productId: number;
    name: string;
    productImageUrl: string;
    description: string;
    brand: string;
    type: string;
}
