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

export function getAllFilters(): Filter[] {
    const filters = [{
        id: 0,
        name: "ON SALE",
        type: FilterType.CHECKBOX,
        value: "On Sale"
    } as CheckboxFilter,
        {
            id: 0,
            name: "PRICE",
            type: FilterType.RANGE,
            value: {
                start: 0,
                end: 10000,
            }
        } as RangeFilter,
    ]
    return filters;
}
