import create from "zustand";
import { FilterItem, FilterType } from "../schema/FilterSchema";

interface FilterStoreState {
  filters: FilterItem[];
  addFilterItemToStore: (
    filterName: string,
    value: string,
    filterType: FilterType,
    filterKey: string
  ) => void;
  removeFilterItemFromStore: (filterName: string) => void;
  addFilterValueToStore: (filterName: string, value: string) => void;
  removeFilterValueFromStore: (filterName: string, value: string) => void;
}

export const useFilterStore = create<FilterStoreState>((set) => ({
  filters: [],
  addFilterItemToStore: (
    filterName: string,
    value: string,
    filterType: FilterType,
    filterKey: string
  ) => {
    set((state) => ({
      filters: addFilterItem(
        state.filters,
        filterName,
        value,
        filterType,
        filterKey
      ),
    }));
  },
  removeFilterItemFromStore: (filterName: string) => {
    set((state) => ({
      filters: removeFilterItem(state.filters, filterName),
    }));
  },
  addFilterValueToStore: (filterName: string, value: string) => {
    set((state) => ({
      filters: addFilterValue(state.filters, filterName, value),
    }));
  },
  removeFilterValueFromStore: (filterName: string, value: string) => {
    set((state) => ({
      filters: removeFilterValue(state.filters, filterName, value),
    }));
  },
}));

export function addFilterItem(
  filters: FilterItem[],
  filterName: string,
  value: string,
  filterType: FilterType,
  filterKey: string
): FilterItem[] {
  let newFilterItem: FilterItem = {
    showName: filterName,
    value: [value],
    filterType: filterType,
    filterKey: filterKey,
  };
  let updatedFilters = [...filters];
  updatedFilters.push(newFilterItem);
  return updatedFilters;
}

export function removeFilterItem(
  filters: FilterItem[],
  filterName: string
): FilterItem[] {
  let updatedFilters = [...filters];
  updatedFilters = updatedFilters.filter((e) => e.showName !== filterName);
  return updatedFilters;
}

export function addFilterValue(
  filters: FilterItem[],
  filterName: string,
  value: string
): FilterItem[] {
  let updatedFilters = [...filters];
  updatedFilters.filter((e) => e.showName === filterName)[0].value.push(value);
  return updatedFilters;
}

export function removeFilterValue(
  filters: FilterItem[],
  filterName: string,
  value: string
): FilterItem[] {
  let updatedFilters = [...filters];
  const currentFilters = updatedFilters.filter(
    (e) => e.showName === filterName
  )[0];
  const updatedValues = currentFilters.value.filter((e) => e !== value);
  updatedFilters.filter((e) => e.showName === filterName)[0].value =
    updatedValues;
  return updatedFilters;
}
