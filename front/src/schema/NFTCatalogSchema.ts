export interface NFTCardDto {
    id: number;
    productId: number;
    productName: string;
    nftImageUrl: string;
    buildDto: BuildDto
}

export interface BuildDto {
    rootElement: ShortElementDto;
    elements: ShortElementDto[];
}

export interface ShortElementDto {
    elementId: number;
    productId: number;
    productName: string;
    productType: string;
    imageUrl: string;
}