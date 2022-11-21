import { useQuery } from "react-query";
import { get } from "./restClient";
import { NFT_POSTFIX } from "../consts/back-paths";
import { NFTCard } from "../schema/NFTCatalogSchema";
import { FilterItem, FilterType } from "../schema/FilterSchema";

export function useGetNFTById(
  id: number
): [NFTCard, boolean, boolean, boolean] {
  const { data, isLoading, isError, isSuccess } = useQuery(
    "GetNFTById:" + id,
    (): Promise<NFTCard> => get(NFT_POSTFIX + "/" + id),
    {
      enabled: !!id,
      refetchOnWindowFocus: false,
    }
  );
  return [data, isLoading, isError, isSuccess];
}

export function useGetAllNFTs(filters: FilterItem[]) {
  const urlPostfix = createFilterPostfix(filters);

  const { data, error, isLoading, isError } = useQuery(
    "getAllNfts" + urlPostfix,
    () => get(NFT_POSTFIX + "?" + urlPostfix)
    // get(NFT_POSTFIX)
  );
  return [data, error, isLoading, isError];
}

function createFilterPostfix(filters: FilterItem[]): string {
  let postfix = "";

  filters?.map((filter) => {
    let filterPostfix = "";
    if (filter.filterType === FilterType.RANGE) {
      filterPostfix = "";
    }

    if (filter.filterType === FilterType.CHECKBOX) {
      filterPostfix +=
        filter.filterKey + "=" + filter.value.map((value) => value + ",");
    }
    postfix += filterPostfix + "&";
  });

  console.log("postfix");
  console.log(postfix);
  return postfix;
}
