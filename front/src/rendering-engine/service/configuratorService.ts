import { useQuery } from "react-query";
import { getConfiguratorBack } from "../../services/restClient";
import { BUILD_TREE_POSTFIX, CONFIGURATOR_POSTFIX } from "../../consts/back-paths";
import { BuildTree } from "../schema/BuildTreeSchema";

export function useGetBuildTreeByBase64Code(treeBase64Code: String): [BuildTree, boolean, boolean, boolean] {
    const { data, isLoading, isError, isSuccess } = useQuery(
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
                currentBuildIds
            ),
        {
            enabled: !!currentBuildIds,
            refetchOnWindowFocus: false,
        },
    );
    return { data, isLoading, isError, isSuccess };
}
