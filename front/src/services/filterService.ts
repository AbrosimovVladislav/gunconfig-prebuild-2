import {FilterItem} from "../schema/FilterSchema";
import {useQuery} from "react-query";
import {get} from "./restClient";
import {FILTERS_POSTFIX, NFT_CATALOG_ENDPOINT} from "../consts/back-paths";

export function useGetFilters(): [FilterItem[], boolean, boolean, boolean] {
    const {data, isLoading, isError, isSuccess} = useQuery(
        "GetFilters",
        (): Promise<FilterItem[]> => get(NFT_CATALOG_ENDPOINT + FILTERS_POSTFIX),
        {refetchOnWindowFocus: false}
    );
    return [data, isLoading, isError, isSuccess];
}
