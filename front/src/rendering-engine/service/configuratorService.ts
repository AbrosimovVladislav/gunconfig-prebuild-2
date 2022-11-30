import {useQuery} from "react-query";
import {getConfiguratorBack} from "../../services/restClient";
import {BUILD_TREE_POSTFIX, CONFIGURATOR_POSTFIX} from "../../consts/back-paths";
import {BuildTree} from "../schema/BuildTreeSchema";

export function useGetBuildTreeByBase64Code(treeBase64Code: String): [BuildTree[], boolean, boolean, boolean] {
    treeBase64Code = "ewogICJpZCI6IDEsCiAgImNoaWxkcmVuIjogWwogICAgewogICAgICAiaWQiOiAyLAogICAgICAiY2hpbGRyZW4iOiBbXQogICAgfSwKICAgIHsKICAgICAgImlkIjogMywKICAgICAgImNoaWxkcmVuIjogWwogICAgICAgIHsKICAgICAgICAgICJpZCI6IDQsCiAgICAgICAgICAiY2hpbGRyZW4iOiBbXQogICAgICAgIH0KICAgICAgXQogICAgfSwKICAgIHsKICAgICAgImlkIjogNiwKICAgICAgImNoaWxkcmVuIjogW10KICAgIH0KICBdCn0=";
    const {data, isLoading, isError, isSuccess} = useQuery(
        "GetBuildTreeByCode" + treeBase64Code,
        (): Promise<BuildTree[]> => getConfiguratorBack(CONFIGURATOR_POSTFIX + BUILD_TREE_POSTFIX + "/" + treeBase64Code)
    );
    return [data, isLoading, isError, isSuccess];
}