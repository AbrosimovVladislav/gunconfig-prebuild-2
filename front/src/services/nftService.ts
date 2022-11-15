import { useQuery } from "react-query";
import { get } from "./restClient";
import { NFT_POSTFIX } from "../consts/back-paths";

export function useGetNFTById(id: number) {
    const { data, error, isLoading, isError, isSuccess } = useQuery("GetNFTById:" + id, () => get(NFT_POSTFIX + id),{
        enabled: !!id
    });
    return [data, error, isLoading, isError, isSuccess ];
}

export function useGetAllNFTs() {
    const { data, error, isLoading, isError } = useQuery("getAllNfts", () => get(NFT_POSTFIX));
    return [data, error, isLoading, isError];
}
