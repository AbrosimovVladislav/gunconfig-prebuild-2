export interface BuildTree {
    id: number;
    name: string;
    image: string;
    type: string;
    x: number;
    y: number;
    width: number;
    visible?: boolean;
    children?: BuildTree[];
}
