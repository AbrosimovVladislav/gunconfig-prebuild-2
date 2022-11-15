export enum FilterType {
    CHECKBOX = "CHECKBOX",
    RANGE = "RANGE"
}

export interface Filter {
    id: number,
    name: string
    type: FilterType,
}

export interface CheckboxFilter extends Filter {
    value: string;
}

export interface RangeFilter extends Filter {
    value: {
        start: number,
        end: number,
    }
}