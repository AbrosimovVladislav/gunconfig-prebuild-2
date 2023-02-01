import { BuildTree } from "../schema/configurator/BuildTree";
import { FRONT_CURRENT_PATH } from "../config/env-paths";
import { Product } from "../schema/common/Product";
import { IdsBuildTree } from "../schema/configurator/IdsBuildTree";

/**
 * Find product by id in BuildTree, and return his itemId and itemId of his parent
 **/
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

/**
 * Map Build Tree to List of Products (Making flat structure from tree)
 **/
export function mapBuildTreeToProducts(buildTree: BuildTree): Product[] {
    if (!buildTree) return null;
    let products = [];
    getChildrenProductsRecursively(buildTree, products);
    return products.filter(product => product.type!=="GUN");
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

/**
 * Map Build Tree to List of ids, in string view
 **/
export function getIdsOfBuildTree(buildTree: BuildTree): string {
    if (!buildTree) return null;
    let ids = [];
    getChildrenIdsRecursively(buildTree, ids);
    return ids.toString();
}

function getChildrenIdsRecursively(buildTree: BuildTree, ids: number[]) {
    ids.push(buildTree.id);
    if (buildTree.children && buildTree.children.length > 0) {
        buildTree.children.forEach(child => getChildrenIdsRecursively(child, ids));
    }
}

/**
 * Convert Build Tree to schema, get base64Code of it, and return link for configuring this build
 **/
export function getBuildLinkFromBuildTree(buildTree: BuildTree): string {
    const base64Code = getBase64CodeFromBuildTree(buildTree);
    return FRONT_CURRENT_PATH + ":3000/configurator/" + base64Code;
}

/**
 * Convert Build Tree to schema and get base64Code of it
 **/
export function getBase64CodeFromBuildTree(buildTree: BuildTree): string {
    let idsTree: IdsBuildTree = { id: 1, children: [] };
    recursiveFillingOfIdsTree(idsTree, buildTree);
    return btoa(JSON.stringify(idsTree));
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
