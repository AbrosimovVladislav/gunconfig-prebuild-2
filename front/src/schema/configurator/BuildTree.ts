export interface BuildTree {
    id: number;
    productId: number;
    name: string;
    image: string;
    type: string;

    x: number;
    y: number;
    width: number;

    brand: string;
    description: string;
    thumbnailImage: string;

    incompatible: boolean;
    incompatibleIds: number[];

    children?: BuildTree[];
}
