import {FilterItem, FilterType} from "../schema/FilterSchema";
import {useQuery} from "react-query";
import {get} from "./restClient";
import {FILTERS_POSTFIX, NFT_POSTFIX} from "../consts/back-paths";

export function useGetFilters(): [FilterItem[], boolean, boolean, boolean] {
    const {data, isLoading, isError, isSuccess} = useQuery(
        "GetFilters",
        (): Promise<FilterItem[]> => get(NFT_POSTFIX + FILTERS_POSTFIX),
        {refetchOnWindowFocus: false}
    );
    return [data, isLoading, isError, isSuccess];
}

export function createFilterItemsFromUrlParams(urlParams: string): FilterItem[] {
    let filterItems: FilterItem[] = [];

    let separatedFilters = urlParams.split("&");
    separatedFilters.map((filter) => {
        const filterKey: string = filter.split("=")[0];

        let value: string[] = filter.split("=")[1].split(",");
        value = value.map(e => e.replaceAll("%20", " "));

        const type: FilterType = filter.includes("interval") ? FilterType.RANGE : FilterType.CHECKBOX;

        let newFilterItem: FilterItem = {
            value: value,
            filterKey: filterKey,
            filterType: type,
        };
        filterItems.push(newFilterItem);
    });
    return filterItems;
}

export function createUrlParamsFromFilterItems(filterItems: FilterItem[]): string {
    let urlParams = "";

    filterItems?.map((filter) => {
        let filterPostfix = "";
        if (filter.filterType === FilterType.RANGE) {
            filterPostfix = "";
        }

        if (filter.filterType === FilterType.CHECKBOX) {
            filterPostfix +=
                filter.filterKey + "=" + filter.value.map((value) => value + ",");
        }
        urlParams += filterPostfix + "&";
        urlParams = urlParams.replaceAll(",,", ",");
        urlParams = urlParams.replaceAll(",&", "&");
    });

    if (urlParams.endsWith("&")) {
        urlParams = urlParams.slice(0, urlParams.length - 1);
    }
    return urlParams;
}
