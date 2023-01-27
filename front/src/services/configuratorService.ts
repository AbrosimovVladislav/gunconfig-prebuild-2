import { useQuery } from "react-query";
import { getConfiguratorBack, post } from "./restClient";
import {
    BUILD_TREE_POSTFIX,
    CONFIGURATOR_ENDPOINT,
    GUNS_FOR_CHOOSE_POSTFIX,
    NFT_CREATION_ENDPOINT,
} from "../consts/back-paths";
import { BuildTree } from "../schema/configurator/BuildTree";
import { FRONT_CURRENT_PATH } from "../config/env-paths";
import { CreateNFTRequest } from "../schema/common/CreateNFTRequest";
import { GunsForChoose } from "../schema/configurator/GunsForChoose";
import { Product } from "../schema/common/Product";
import { IdsBuildTree } from "../schema/configurator/IdsBuildTree";

export function findProductInBuildTree(buildTree: BuildTree, productId: number, parentId: number): { itemId: number, parentId: number } | undefined {
    if (buildTree.productId === productId) {
        return { itemId: buildTree.id, parentId: parentId };
    }
    if (buildTree.children && buildTree.children.length > 0) {
        for (const child of buildTree.children) {
            const result = findProductInBuildTree(child, productId, buildTree.id);
            if (result) {
                return result;
            }
        }
    }
    return undefined;
}

export async function getGunPartRenderingInfo(product: Product, parentId: number): Promise<BuildTree> {
    const response = await getConfiguratorBack(
        CONFIGURATOR_ENDPOINT +
        "/gunpart/" + parentId +
        "/" + product.productId);
    return response;
}

export function mapBuildTreeToProducts(buildTree: BuildTree): Product[] {
    if (!buildTree) return null;
    let products = [];
    getChildrenProductsRecursively(buildTree, products);
    return products;
}

function getChildrenProductsRecursively(buildTree: BuildTree, products: Product[]) {
    products.push(mapBuildTreeToProduct(buildTree));
    if (buildTree.children && buildTree.children.length > 0) {
        buildTree.children.forEach(child => getChildrenProductsRecursively(child, products));
    }
}

function mapBuildTreeToProduct(buildTree: BuildTree): Product {
    return {
        productId: buildTree.id,
        name: buildTree.name,
        productImageUrl: buildTree.image,
        description: buildTree.description,
        brand: buildTree.brand,
        type: buildTree.type,
        incompatible: false,
        incompatibleIds: [],
    };
}

export function getIdsArrOfBuildTree(buildTree: BuildTree): string {
    if (!buildTree) return null;
    let idsArr = [];
    getChildrenIdsRecursively(buildTree, idsArr);
    return idsArr.toString();
}

function getChildrenIdsRecursively(buildTree: BuildTree, idsArr: number[]) {
    idsArr.push(buildTree.id);
    if (buildTree.children && buildTree.children.length > 0) {
        buildTree.children.forEach(child => getChildrenIdsRecursively(child, idsArr));
    }
}

export function getBuildLinkFromBuildTree(buildTree: BuildTree): string {
    let idsTree: IdsBuildTree = { id: 1, children: [] };
    recursiveFillingOfIdsTree(idsTree, buildTree);
    const base64Code: string = btoa(JSON.stringify(idsTree));
    const url: string = FRONT_CURRENT_PATH + ":3000/configurator/" + base64Code;
    return url;
}

export function getBase64CodeByBuildTree(buildTree: BuildTree): string {
    let idsTree: IdsBuildTree = { id: 1, children: [] };
    recursiveFillingOfIdsTree(idsTree, buildTree);
    const base64Code: string = btoa(JSON.stringify(idsTree));
    return base64Code;
}

function recursiveFillingOfIdsTree(idsTree: IdsBuildTree, buildTree: BuildTree) {
    idsTree.id = buildTree.id;
    if (buildTree.children && buildTree.children.length > 0) {
        buildTree.children.forEach(child => idsTree.children.push({ id: child.id, children: [] }));
        for (let i = 0; i < buildTree.children.length; i++) {
            recursiveFillingOfIdsTree(idsTree.children[i], buildTree.children[i]);
        }
    }
}

export function useGetBuildTreeByBase64Code(treeBase64Code: String): [BuildTree, boolean, boolean, boolean] {
    const { data, isLoading, isError, isSuccess } = useQuery(
        "GetBuildTreeByCode" + treeBase64Code,
        (): Promise<BuildTree> => getConfiguratorBack(CONFIGURATOR_ENDPOINT + BUILD_TREE_POSTFIX + "/" + treeBase64Code),
        {
            refetchOnWindowFocus: false,
        },
    );
    return [data, isLoading, isError, isSuccess];
}

export async function useCreateNFTRequest(createNFTRequest: CreateNFTRequest) {
    const response = await post(NFT_CREATION_ENDPOINT, createNFTRequest);
    return response;
}

export function useGetGunsForChoosing()
    : { data: GunsForChoose[]; isLoading: boolean; isError: boolean; isSuccess: boolean } {

    const { data, isLoading, isError, isSuccess } = useQuery(
        "useGetGunsForChoosing",
        () => getConfiguratorBack(CONFIGURATOR_ENDPOINT + GUNS_FOR_CHOOSE_POSTFIX),
        {
            refetchOnWindowFocus: false,
        },
    );
    return { data, isLoading, isError, isSuccess };
}

export async function getGunPartsByParentAndType(
    parentId: number,
    typeOfProduct: string,
    currentBuildIds: string,
): Promise<Product[]> {
    const response = await getConfiguratorBack(
        CONFIGURATOR_ENDPOINT +
        "/gunpart?parentId=" +
        parentId +
        "&typeOfProduct=" +
        typeOfProduct +
        "&currentBuildIds=" +
        currentBuildIds,
    );
    return await response;
}

export function useGetGunPartsByParentAndType(
    parentId: number,
    typeOfProduct: string,
    currentBuildIds: string,
): { data: BuildTree[]; isLoading: boolean; isError: boolean; isSuccess: boolean } {
    const { data, isLoading, isError, isSuccess } = useQuery(
        "GetGunPartsByParentAndType" + parentId + typeOfProduct + currentBuildIds,
        (): Promise<BuildTree[]> =>
            getConfiguratorBack(
                CONFIGURATOR_ENDPOINT +
                "/gunpart?parentId=" +
                parentId +
                "&typeOfProduct=" +
                typeOfProduct +
                "&currentBuildIds=" +
                currentBuildIds,
            ),
        {
            enabled: !!currentBuildIds,
            refetchOnWindowFocus: false,
        },
    );
    return { data, isLoading, isError, isSuccess };
}
