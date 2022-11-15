import {Filter, FilterType, RangeFilter, CheckboxFilter} from "../schema/FilterSchema";

export function mockUseGetAllFilters(): Filter[] {
    return [{
        id: 0,
        name: "ON SALE",
        type: FilterType.CHECKBOX,
        value: "On Sale"
    } as CheckboxFilter,
        {
        id: 0,
        name: "ON PEPELE",
        type: FilterType.CHECKBOX,
        value: "On Pepele"
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
}
