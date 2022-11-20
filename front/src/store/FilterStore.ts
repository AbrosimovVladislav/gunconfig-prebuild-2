import create from "zustand";
import { FilterItem, FilterType } from "../schema/FilterSchema";

interface FilterStoreState {
  filters: FilterItem[];
  addFilterItem: (
    filterName: string,
    value: string,
    filterType: FilterType,
    filterKey: string
  ) => void;
  removeFilterItem: (filterName: string) => void;
  addFilterValue: (filterName: string, value: string) => void;
  removeFilterValue: (filterName: string, value: string) => void;
}

export const useFilterStore = create<FilterStoreState>((set) => ({
  filters: [],
  addFilterItem: (
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
  removeFilterItem: (filterName: string) => {
    set((state) => ({
      filters: removeFilterItem(state.filters, filterName),
    }));
  },
  addFilterValue: (filterName: string, value: string) => {
    set((state) => ({
      filters: addFilterValue(state.filters, filterName, value),
    }));
  },
  removeFilterValue: (filterName: string, value: string) => {
    set((state) => ({
      filters: removeFilterValue(state.filters, filterName, value),
    }));
  },
}));

function addFilterItem(
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
  filters.push(newFilterItem);
  console.log("ADD ITEM");
  console.log(filterName, value);
  console.log(filters);
  return filters;
}

function removeFilterItem(
  filters: FilterItem[],
  filterName: string
): FilterItem[] {
  const updatedFilters = filters.filter((e) => e.showName !== filterName);
  console.log("REMOVE ITEM");
  console.log(filterName);
  console.log(filters);
  return updatedFilters;
}

function addFilterValue(
  filters: FilterItem[],
  filterName: string,
  value: string
): FilterItem[] {
  filters.filter((e) => e.showName === filterName)[0].value.push(value);

  console.log("ADD VALUE");
  console.log(filterName, value);
  console.log(filters);
  return filters;
}

function removeFilterValue(
  filters: FilterItem[],
  filterName: string,
  value: string
): FilterItem[] {
  const currentFilters = filters.filter((e) => e.showName === filterName)[0];
  const updatedValues = currentFilters.value.filter((e) => e !== value);
  filters.filter((e) => e.showName === filterName)[0].value = updatedValues;

  console.log("REMOVE VALUE");
  console.log(filterName, value);
  console.log(filters);
  return filters;
}
