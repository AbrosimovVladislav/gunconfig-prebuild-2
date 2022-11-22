import {FilterItem, FilterType} from "../schema/FilterSchema";
import {useQuery} from "react-query";
import {get} from "./restClient";
import {FILTERS_POSTFIX, NFT_POSTFIX} from "../consts/back-paths";

export function useGetFilters(): [FilterItem[], boolean, boolean, boolean] {
    const {data, isLoading, isError, isSuccess} = useQuery(
        "GetFilters",
        (): Promise<FilterItem[]> => get(NFT_POSTFIX + FILTERS_POSTFIX),
        {
            refetchOnWindowFocus: false,
        }
    );
    return [data, isLoading, isError, isSuccess];
}

export function createFilterItemsFromQueryPostfix(filtersString: string): FilterItem[] {
    let filterItems: FilterItem[] = [];

    let separatedFilters = filtersString.split("&");
    separatedFilters.map((filter) => {
        const filterKey: string = filter.split("=")[0];
        let value: string[] = filter.split("=")[1].split(",");
        value = value.map(e => e.replaceAll("%20"," "));
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

export function createQueryPostfixFromFilterItems(filters: FilterItem[]): string {
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
        postfix = postfix.replaceAll(",,", ",");
        postfix = postfix.replaceAll(",&", "&");
    });

    if (postfix.endsWith("&")) {
        postfix = postfix.slice(0, postfix.length - 1);
    }
    return postfix;
}
