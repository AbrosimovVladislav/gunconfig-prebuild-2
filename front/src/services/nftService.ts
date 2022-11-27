import {useQuery} from "react-query";
import {get} from "./restClient";
import {NFT_POSTFIX} from "../consts/back-paths";
import {NFTCard} from "../schema/NFTCatalogSchema";
import {FilterItem, FilterType} from "../schema/FilterSchema";
import {createUrlParamsFromFilterItems} from "./filterService";

export function useGetNFTByFilters(filters: FilterItem[]): [NFTCard[], boolean, boolean, boolean] {
    const urlParams = createUrlParamsFromFilterItems(filters);

    const {data, isLoading, isError, isSuccess} = useQuery(
        "GetNFTByFilters" + urlParams,
        (): Promise<NFTCard[]> => get(NFT_POSTFIX + "?" + urlParams)
    );
    return [data, isLoading, isError, isSuccess];
}

export function useGetNFTById(id: number): [NFTCard, boolean, boolean, boolean] {
    const {data, isLoading, isError, isSuccess} = useQuery(
        "GetNFTById:" + id,
        (): Promise<NFTCard> => get(NFT_POSTFIX + "/" + id),
        {enabled: !!id, refetchOnWindowFocus: false}
    );
    return [data, isLoading, isError, isSuccess];
}
