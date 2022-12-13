export interface BuildTree {
    id: number;
    name: string;
    image: string;
    type: string;
    x: number;
    y: number;
    width: number;
    visible?: boolean;
    //temp solution, delete this after splitting gun changing process to 2 and 3 endpoint
    incompatible: boolean
    children?: BuildTree[];
}
