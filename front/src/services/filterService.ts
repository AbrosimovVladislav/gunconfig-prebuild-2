import { FilterItem, FilterType } from "../schema/FilterSchema";
import { useQuery } from "react-query";
import { get } from "./restClient";
import { FILTERS_POSTFIX, NFT_POSTFIX } from "../consts/back-paths";

export function fromStringToFilterItems(filtersString: string): FilterItem[] {
  //collection=AR-15-SPECIAL,AR-15-2023&products.brand=Colt,Fab-Defence
  let filterItems: FilterItem[] = [];

  let separatedFilters = filtersString.split("&");
  separatedFilters.map((filter) => {
    const filterKey: string = filter.split("=")[0];
    const value: string[] = filter.split("=")[1].split(",");
    const type: FilterType = filter.includes("interval")
      ? FilterType.RANGE
      : FilterType.CHECKBOX;
    let newFilterItem: FilterItem = {
      value: value,
      filterKey: filterKey,
      filterType: type,
    };
    filterItems.push(newFilterItem);
  });
  return filterItems;
}

export function useGetFilters(): [FilterItem[], boolean, boolean, boolean] {
  const { data, isLoading, isError, isSuccess } = useQuery(
    "GetFilters",
    (): Promise<FilterItem[]> => get(NFT_POSTFIX + FILTERS_POSTFIX),
    {
      refetchOnWindowFocus: false,
    }
  );
  return [data, isLoading, isError, isSuccess];
}
