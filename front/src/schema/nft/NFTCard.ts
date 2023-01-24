import { Product } from "../common/Product";

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
    buildLink: string;
}
