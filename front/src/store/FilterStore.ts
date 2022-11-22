import create from "zustand";
import {FilterItem, FilterType} from "../schema/FilterSchema";

interface FilterStoreState {
    filters: FilterItem[];
    addFilterItemToStore: (filterKey: string, value: string, type: FilterType) => void;
    removeFilterItemFromStore: (filterKey: string) => void;
    addFilterValueToStore: (filterKey: string, value: string) => void;
    removeFilterValueFromStore: (filterKey: string, value: string) => void;
    updateFilterStore: (filters: FilterItem[]) => void;
}

export const useFilterStore = create<FilterStoreState>((set) => ({
    filters: [],
    addFilterItemToStore: (filterKey: string, value: string, type: FilterType) => {
        set((state) => ({
            filters: addFilterItem(state.filters, filterKey, value, type),
        }));
    },
    removeFilterItemFromStore: (filterKey: string) => {
        set((state) => ({
            filters: removeFilterItem(state.filters, filterKey),
        }));
    },
    addFilterValueToStore: (filterKey: string, value: string) => {
        set((state) => ({
            filters: addFilterValue(state.filters, filterKey, value),
        }));
    },
    removeFilterValueFromStore: (filterKey: string, value: string) => {
        set((state) => ({
            filters: removeFilterValue(state.filters, filterKey, value),
        }));
    },
    updateFilterStore: (filterItems: FilterItem[]) => {
        set((state) => ({
            filters: filterItems,
        }));
    },
}));

export function addFilterItem(
    filters: FilterItem[],
    filterKey: string,
    value: string,
    type: FilterType
): FilterItem[] {
    let newFilterItem: FilterItem = {
        filterType: type,
        value: [value],
        filterKey: filterKey,
    };
    let updatedFilters = [...filters];
    updatedFilters.push(newFilterItem);
    return updatedFilters;
}

export function removeFilterItem(
    filters: FilterItem[],
    filterKey: string
): FilterItem[] {
    let updatedFilters = [...filters];
    updatedFilters = updatedFilters.filter((e) => e.filterKey !== filterKey);
    return updatedFilters;
}

export function addFilterValue(
    filters: FilterItem[],
    filterKey: string,
    value: string
): FilterItem[] {
    let updatedFilters = [...filters];
    updatedFilters.filter((e) => e.filterKey === filterKey)[0].value.push(value);
    return updatedFilters;
}

export function removeFilterValue(
    filters: FilterItem[],
    filterKey: string,
    value: string
): FilterItem[] {
    let updatedFilters = [...filters];
    const currentFilters = updatedFilters.filter(
        (e) => e.filterKey === filterKey
    )[0];
    const updatedValues = currentFilters.value.filter((e) => e !== value);
    updatedFilters.filter((e) => e.filterKey === filterKey)[0].value =
        updatedValues;
    return updatedFilters;
}
