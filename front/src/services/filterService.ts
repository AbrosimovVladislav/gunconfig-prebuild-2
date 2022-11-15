import { Filter, FilterType, RangeFilter, CheckboxFilter } from "../schema/FilterSchema";

export function mockUseGetAllFilters(): Filter[] {
    return [{
        id: 0,
        name: "Brand",
        type: FilterType.CHECKBOX,
        value: ["Colt", "Magpul", "Fab-Defence", "Daniel Defence"]
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
