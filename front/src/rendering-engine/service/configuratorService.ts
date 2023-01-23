import { useQuery } from "react-query";
import { getConfiguratorBack, post, get } from "../../services/restClient";
import {
    BUILD_TREE_POSTFIX,
    CONFIGURATOR_POSTFIX, GUNS_FOR_CHOOSE_POSTFIX,
    IS_BUILD_ALREADY_EXISTS_POSTFIX,
    NFT_CREATION_POSTFIX,
    NFT_POSTFIX,
} from "../../consts/back-paths";
import { BuildTree, IdsBuildTree } from "../schema/BuildTreeSchema";
import { FRONT_CURRENT_PATH } from "../../config/env-paths";
import { CreateNFTRequest } from "../schema/CreateNFTRequestSchema";
import { GunForChoose } from "../../schema/Configurator";
import {Product} from "../../schema/NFTCatalogSchema";

export function getListOfBuildTreeProducts(buildTree: BuildTree): Product[] {
    if (!buildTree) return null;
    let products = [];
    getChildrenProductsRecursively(buildTree, products);
    return products;
}

function getChildrenProductsRecursively(buildTree: BuildTree, products: Product[]) {
    products.push(mapBuildTreeToProducts(buildTree));
    if (buildTree.children && buildTree.children.length > 0) {
        buildTree.children.forEach(child => getChildrenProductsRecursively(child, products));
    }
}

function mapBuildTreeToProducts(buildTree: BuildTree): Product {
    return {
        productId: buildTree.id,
        name: buildTree.name,
        productImageUrl: buildTree.image,
        description: buildTree.description,
        brand: buildTree.brand,
        type: buildTree.type,
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
        (): Promise<BuildTree> => getConfiguratorBack(CONFIGURATOR_POSTFIX + BUILD_TREE_POSTFIX + "/" + treeBase64Code),
        {
            refetchOnWindowFocus: false,
        },
    );
    return [data, isLoading, isError, isSuccess];
}

export async function useCreateNFTRequest(createNFTRequest: CreateNFTRequest) {
    const response = await post(NFT_CREATION_POSTFIX, createNFTRequest);
    return response;
}

export function useGetGunsForChoosing()
    : { data: GunForChoose[]; isLoading: boolean; isError: boolean; isSuccess: boolean } {

    const { data, isLoading, isError, isSuccess } = useQuery(
        "useGetGunsForChoosing",
        () => getConfiguratorBack(CONFIGURATOR_POSTFIX + GUNS_FOR_CHOOSE_POSTFIX),
        {
            refetchOnWindowFocus: false,
        },
    );
    return { data, isLoading, isError, isSuccess };
}

export function isBuildAlreadyExists(base64BuildCode: string)
    : { data: any; isLoading: boolean; isError: boolean; isSuccess: boolean } {

    const { data, isLoading, isError, isSuccess } = useQuery(
        "isBuildAlreadyExists" + base64BuildCode,
        () => get(NFT_POSTFIX + IS_BUILD_ALREADY_EXISTS_POSTFIX + base64BuildCode),
        {
            enabled: !!base64BuildCode,
            refetchOnWindowFocus: false,
        },
    );
    return { data, isLoading, isError, isSuccess };
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
                CONFIGURATOR_POSTFIX +
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
