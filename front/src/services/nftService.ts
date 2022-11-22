import {useQuery} from "react-query";
import {get} from "./restClient";
import {NFT_POSTFIX} from "../consts/back-paths";
import {NFTCard} from "../schema/NFTCatalogSchema";
import {FilterItem, FilterType} from "../schema/FilterSchema";
import {createQueryPostfixFromFilterItems} from "./filterService";

export function useGetNFTByFilters(filters: FilterItem[]): [NFTCard[], boolean, boolean, boolean] {
    const urlPostfix = createQueryPostfixFromFilterItems(filters);

    const {data, isLoading, isError, isSuccess} = useQuery(
        "getAllNfts" + urlPostfix,
        () => get(NFT_POSTFIX + "?" + urlPostfix)
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
