import { useQuery } from "react-query";
import { get } from "./restClient";
import { NFT_POSTFIX } from "../consts/back-paths";

export function useGetNFTById(id: number) {
    const { data, error, isLoading, isError } = useQuery("GetNFTById:" + id, () => get(NFT_POSTFIX + id));
    return [data, error, isLoading, isError];
}

export function useGetAllNFTs() {
    const { data, error, isLoading, isError } = useQuery("getAllNfts", () => get(NFT_POSTFIX));
    return [data, error, isLoading, isError];
}
