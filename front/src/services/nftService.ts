import { useQuery } from "react-query";
import { get } from "./restClient";
import {
    COLLECTION_POSTFIX,
    NFT_CATALOG_ENDPOINT,
    NFT_ID_BY_BASE64CODE_POSTFIX,
} from "../consts/back-paths";
import { NFTCard } from "../schema/nft/NFTCard";
import { NextRouter } from "next/router";
import { createUrlRequestPostfixFromParams } from "./urlService";

export function useGetNFTsByCollection(collection: string): { data: NFTCard[]; isLoading: boolean; isError: boolean; isSuccess: boolean } {
    const { data, isLoading, isError, isSuccess } = useQuery(
        "GetCollectionByName" + collection,
        (): Promise<NFTCard[]> => get(COLLECTION_POSTFIX + "/" + collection),
        { enabled: !!collection, refetchOnWindowFocus: false },
    );
    return { data, isLoading, isError, isSuccess };
}

export function useGetNFTByUrlParams(router: NextRouter): [NFTCard[], boolean, boolean, boolean] {
    const urlParams = createUrlRequestPostfixFromParams(router);

    const { data, isLoading, isError, isSuccess } = useQuery(
        "GetNFTByFilters" + urlParams,
        (): Promise<NFTCard[]> => get(NFT_CATALOG_ENDPOINT + "?" + urlParams),
        { refetchOnWindowFocus: false },
    );
    return [data, isLoading, isError, isSuccess];
}

export function useGetNFTById(id: number): { data: NFTCard; isLoading: boolean; isError: boolean; isSuccess: boolean } {
    const { data, isLoading, isError, isSuccess } = useQuery(
        "GetNFTById:" + id,
        (): Promise<NFTCard> => get(NFT_CATALOG_ENDPOINT + "/" + id),
        { enabled: !!id, refetchOnWindowFocus: false },
    );
    return { data, isLoading, isError, isSuccess };
}

export function getNFTIdByBase64Code(base64Code: string)
    : { nftId: number; isLoading: boolean; isError: boolean; isSuccess: boolean } {

    const { data, isLoading, isError, isSuccess } = useQuery(
        "getNFTIdByBase64Code" + base64Code,
        () => get(NFT_CATALOG_ENDPOINT + NFT_ID_BY_BASE64CODE_POSTFIX + base64Code),
        {
            enabled: !!base64Code,
            refetchOnWindowFocus: false,
        },
    );
    return { nftId: data, isLoading, isError, isSuccess };
}
