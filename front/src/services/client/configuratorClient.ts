import { Product } from "../../schema/common/Product";
import { BuildTree } from "../../schema/configurator/BuildTree";
import { getConfiguratorBack } from "../restClient";
import {
    BUILD_TREE_POSTFIX,
    CONFIGURATOR_ENDPOINT,
    GUNS_FOR_CHOOSE_POSTFIX,
} from "../../consts/back-paths";
import { useQuery } from "react-query";
import { GunsForChoose } from "../../schema/configurator/GunsForChoose";

export async function getGunPartRenderingInfo(product: Product, parentId: number): Promise<BuildTree> {
    const response = await getConfiguratorBack(
        CONFIGURATOR_ENDPOINT +
        "/gunpart/" + parentId +
        "/" + product.productId);
    return response;
}

export function useGetBuildTreeByBase64Code(base64Code: String): [BuildTree, boolean, boolean, boolean] {
    const { data, isLoading, isError, isSuccess } = useQuery(
        "GetBuildTreeByCode" + base64Code,
        (): Promise<BuildTree> => getConfiguratorBack(
            CONFIGURATOR_ENDPOINT +
            BUILD_TREE_POSTFIX + "/" + base64Code),
        {
            refetchOnWindowFocus: false,
        },
    );
    return [data, isLoading, isError, isSuccess];
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
