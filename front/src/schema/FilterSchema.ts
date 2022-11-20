export enum FilterType {
  CHECKBOX = "CHECKBOX",
  RANGE = "RANGE",
}

export interface FilterItem {
  showName: string;
  filterKey?: string;
  filterType?: FilterType;
  rank?: number;
  value: string[];
}
