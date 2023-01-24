export interface CreateNFTRequest {
    buildImage: string;
    base64Code: string;
    collection: string;
    firstOwner: string;
    name: string;
    mintingPrice: number;
}