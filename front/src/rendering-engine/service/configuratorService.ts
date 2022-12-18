import {useQuery} from "react-query";
import {getConfiguratorBack} from "../../services/restClient";
import {BUILD_TREE_POSTFIX, CONFIGURATOR_POSTFIX} from "../../consts/back-paths";
import {BuildTree, IdsBuildTree} from "../schema/BuildTreeSchema";
import {FRONT_CURRENT_PATH} from "../../config/env-paths";

export function getBuildLinkFromBuildTree(buildTree: BuildTree): string {
    let idsTree: IdsBuildTree = {id: 1, children: []};
    recursiveFillingOfIdsTree(idsTree, buildTree);
    const base64Code: string = btoa(JSON.stringify(idsTree))
    const url: string = FRONT_CURRENT_PATH + ":3000/configurator/" + base64Code;
    return url;
}

function recursiveFillingOfIdsTree(idsTree: IdsBuildTree, buildTree: BuildTree) {
    idsTree.id = buildTree.id
    if (buildTree.children && buildTree.children.length > 0) {
        buildTree.children.forEach(child => idsTree.children.push({id: child.id, children: []}))
        for (let i = 0; i < buildTree.children.length; i++) {
            recursiveFillingOfIdsTree(idsTree.children[i], buildTree.children[i])
        }
    }
}

export function useGetBuildTreeByBase64Code(treeBase64Code: String): [BuildTree, boolean, boolean, boolean] {
    const {data, isLoading, isError, isSuccess} = useQuery(
        "GetBuildTreeByCode" + treeBase64Code,
        (): Promise<BuildTree> => getConfiguratorBack(CONFIGURATOR_POSTFIX + BUILD_TREE_POSTFIX + "/" + treeBase64Code),
        {
            refetchOnWindowFocus: false,
        }
    );
    return [data, isLoading, isError, isSuccess];
}

export function useGetGunPartsByParentAndType(
    parentId: number,
    typeOfProduct: string,
    currentBuildIds: string
): { data: BuildTree[]; isLoading: boolean; isError: boolean; isSuccess: boolean } {
    const {data, isLoading, isError, isSuccess} = useQuery(
        "GetGunPartsByParentAndType" + parentId + typeOfProduct + currentBuildIds,
        (): Promise<BuildTree[]> =>
            getConfiguratorBack(
                CONFIGURATOR_POSTFIX +
                "/gunpart?parentId=" +
                parentId +
                "&typeOfProduct=" +
                typeOfProduct +
                "&currentBuildIds=" +
                currentBuildIds
            ),
        {
            enabled: !!currentBuildIds,
            refetchOnWindowFocus: false,
        },
    );
    return {data, isLoading, isError, isSuccess};
}
