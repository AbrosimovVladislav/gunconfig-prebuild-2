import {FilterItem} from "../schema/FilterSchema";
import {useQuery} from "react-query";
import {get} from "./restClient";
import {FILTERS_POSTFIX, NFT_POSTFIX} from "../consts/back-paths";

export function useGetFilters(): [FilterItem[], boolean, boolean, boolean] {
    const {data, isLoading, isError, isSuccess} = useQuery(
        "GetFilters",
        (): Promise<FilterItem[]> => get(NFT_POSTFIX + FILTERS_POSTFIX),
        {refetchOnWindowFocus: false}
    );
    return [data, isLoading, isError, isSuccess];
}
