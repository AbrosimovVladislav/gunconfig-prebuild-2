import { useQuery } from "react-query";
import { get } from "./restClient";
import { NFT_POSTFIX } from "../consts/back-paths";
import {NFTCard} from "../schema/NFTCatalogSchema";

export function useGetNFTById(id: number): [NFTCard, boolean, boolean, boolean] {
    const { data, isLoading, isError, isSuccess } = useQuery("GetNFTById:" + id,
        ():Promise<NFTCard> => get(NFT_POSTFIX + id),{
        enabled: !!id,
        refetchOnWindowFocus: false
    });
    return [data, isLoading, isError, isSuccess ];
}

export function useGetAllNFTs() {
    const { data, error, isLoading, isError } = useQuery("getAllNfts", () => get(NFT_POSTFIX));
    return [data, error, isLoading, isError];
}
