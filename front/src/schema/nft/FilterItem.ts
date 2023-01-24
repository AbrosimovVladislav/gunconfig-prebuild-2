import { FilterType } from "./FilterType";

export interface FilterItem {
    showName?: string;
    filterKey: string;
    filterType?: FilterType;
    rank?: number;
    value: string[];
}
