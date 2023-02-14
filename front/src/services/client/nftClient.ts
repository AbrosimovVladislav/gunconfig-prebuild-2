import { CreateNFTRequest } from "../../schema/common/CreateNFTRequest";
import { get, post } from "../restClient";
import {
    BACKGROUND_POSTFIX,
    COLLECTION_POSTFIX,
    FILTERS_POSTFIX,
    NFT_CATALOG_ENDPOINT,
    NFT_CREATION_ENDPOINT,
    NFT_ID_BY_BASE64CODE_POSTFIX,
    NFT_SINGLE_ENDPOINT,
} from "../../consts/back-paths";
import { FilterItem } from "../../schema/nft/FilterItem";
import { useQuery } from "react-query";
import { NFTCard } from "../../schema/nft/NFTCard";
import { ShortNFTCard } from "../../schema/nft/ShortNFTCard";
import { NextRouter } from "next/router";
import { createUrlRequestPostfixFromParams } from "../urlService";

export async function findBackgroundByCollectionAndRarity(collection: string, rarity: string){
    const response = await get(NFT_CREATION_ENDPOINT + BACKGROUND_POSTFIX + "/" + collection + "/" + rarity);
    return response;
}

export async function useCreateNFT(createNFTRequest: CreateNFTRequest) {
    const response = await post(NFT_CREATION_ENDPOINT, createNFTRequest);
    return response;
}

export function useGetFilters(): [FilterItem[], boolean, boolean, boolean] {
    const { data, isLoading, isError, isSuccess } = useQuery(
        "useGetFilters",
        (): Promise<FilterItem[]> => get(NFT_CATALOG_ENDPOINT + FILTERS_POSTFIX),
        { refetchOnWindowFocus: false },
    );
    return [data, isLoading, isError, isSuccess];
}

/***
 * Get NFT by id hook
 */
export function useGetNftById(id: number): { nft: NFTCard; isLoading: boolean; isError: boolean; isSuccess: boolean } {
    const { data, isLoading, isError, isSuccess } = useQuery(
        "useGetNftById:" + id,
        (): Promise<NFTCard> => get(NFT_SINGLE_ENDPOINT + "/" + id),
        { enabled: !!id, refetchOnWindowFocus: false },
    );
    return { nft: data, isLoading, isError, isSuccess };
}

/***
 * Get 8 NFTs from collection with the provided name hook
 */
export function useGetNFTsByCollection(collection: string)
    : { nftsByCollection: ShortNFTCard[]; isLoading: boolean; isError: boolean; isSuccess: boolean } {

    const { data, isLoading, isError, isSuccess } = useQuery(
        "useGetNFTsByCollection" + collection,
        (): Promise<ShortNFTCard[]> => get(NFT_SINGLE_ENDPOINT + COLLECTION_POSTFIX + "/" + collection),
        { enabled: !!collection, refetchOnWindowFocus: false },
    );
    return { nftsByCollection: data, isLoading, isError, isSuccess };
}

/***
 * Get NFTs by provided parameters hook
 */
export function useGetNFTsByUrlParams(router: NextRouter)
    : { nfts: ShortNFTCard[], isLoading: boolean, isError: boolean, isSuccess: boolean } {

    const urlParams = createUrlRequestPostfixFromParams(router);

    const { data, isLoading, isError, isSuccess } = useQuery(
        "useGetNFTsByUrlParams" + urlParams,
        (): Promise<ShortNFTCard[]> => get(NFT_CATALOG_ENDPOINT + "?" + urlParams),
        { refetchOnWindowFocus: false },
    );
    return { nfts: data, isLoading, isError, isSuccess };
}

/***
 * Get NFT id by base64Code hook
 */
export function useGetNFTIdByBase64Code(base64Code: string)
    : { nftId: number; isLoading: boolean; isError: boolean; isSuccess: boolean } {

    const { data, isLoading, isError, isSuccess } = useQuery(
        "useGetNFTIdByBase64Code" + base64Code,
        () => get(NFT_CATALOG_ENDPOINT + NFT_ID_BY_BASE64CODE_POSTFIX + base64Code),
        {
            enabled: !!base64Code,
            refetchOnWindowFocus: false,
        },
    );
    return { nftId: data, isLoading, isError, isSuccess };
}

/***
 * Get NFT id by base64Code
 */
export async function getNFTIdByBase64Code(base64Code: string): Promise<number> {
    const response = await get(NFT_CATALOG_ENDPOINT + NFT_ID_BY_BASE64CODE_POSTFIX + base64Code);
    return await response;
}
