import { useQuery } from "react-query";
import { get } from "./restClient";
import {
    COLLECTION_POSTFIX,
    NFT_CATALOG_ENDPOINT,
    NFT_ID_BY_BASE64CODE_POSTFIX,
    NFT_SINGLE_ENDPOINT,
} from "../consts/back-paths";
import { NFTCard } from "../schema/nft/NFTCard";
import { NextRouter } from "next/router";
import { createUrlRequestPostfixFromParams } from "./urlService";
import { ShortNFTCard } from "../schema/nft/ShortNFTCard";

/***
 * Get nft by id
 */
export function getNFTById(id: number): { nft: NFTCard; isLoading: boolean; isError: boolean; isSuccess: boolean } {
    const { data, isLoading, isError, isSuccess } = useQuery(
        "getNFTById:" + id,
        (): Promise<NFTCard> => get(NFT_SINGLE_ENDPOINT + "/" + id),
        { enabled: !!id, refetchOnWindowFocus: false },
    );
    return { nft: data, isLoading, isError, isSuccess };
}

/***
 * Get 8 nfts from collection with the provided name
 */
export function getNFTsByCollection(collection: string)
    : { nftsByCollection: ShortNFTCard[]; isLoading: boolean; isError: boolean; isSuccess: boolean } {

    const { data, isLoading, isError, isSuccess } = useQuery(
        "getNFTsByCollection" + collection,
        (): Promise<ShortNFTCard[]> => get(NFT_SINGLE_ENDPOINT + COLLECTION_POSTFIX + "/" + collection),
        { enabled: !!collection, refetchOnWindowFocus: false },
    );
    return { nftsByCollection: data, isLoading, isError, isSuccess };
}

/***
 * Get nfts by provided parameters
 */
export function getNFTsByUrlParams(router: NextRouter)
    : { nfts: ShortNFTCard[], isLoading: boolean, isError: boolean, isSuccess: boolean } {

    const urlParams = createUrlRequestPostfixFromParams(router);

    const { data, isLoading, isError, isSuccess } = useQuery(
        "getNFTsByUrlParams" + urlParams,
        (): Promise<ShortNFTCard[]> => get(NFT_CATALOG_ENDPOINT + "?" + urlParams),
        { refetchOnWindowFocus: false },
    );
    return { nfts: data, isLoading, isError, isSuccess };
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
