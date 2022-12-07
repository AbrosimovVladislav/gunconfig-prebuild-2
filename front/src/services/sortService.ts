import {SortingItem} from "../schema/SortingSchema";

export function mockUseGetSorting(): SortingItem[] {
    return [
        {showName: "Price Asc", key: "mintingPrice,asc"},
        {showName: "Price Desc", key: "mintingPrice,desc"}
    ];
}

