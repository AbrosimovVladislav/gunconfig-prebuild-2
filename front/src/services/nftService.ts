import {useQuery} from "react-query";
import {get} from "./restClient";
import {NFT_POSTFIX} from "../consts/back-paths";
import {NFTCard} from "../schema/NFTCatalogSchema";
import {NextRouter} from "next/router";
import {createUrlRequestPostfixFromParams} from "./urlService";

export function useGetNFTByUrlParams(router: NextRouter): [NFTCard[], boolean, boolean, boolean] {
    const urlParams = createUrlRequestPostfixFromParams(router);

    const {data, isLoading, isError, isSuccess} = useQuery(
        "GetNFTByFilters" + urlParams,
        (): Promise<NFTCard[]> => get(NFT_POSTFIX + "?" + urlParams),
        {refetchOnWindowFocus: false}
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
