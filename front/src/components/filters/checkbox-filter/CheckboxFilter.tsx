import React, {useEffect} from "react";
import {FilterItem, FilterType} from "../../../schema/FilterSchema";
import {GCCheckbox} from "../../../gc-components/GCCheckbox";
import {useStyles} from "./CheckboxFilterStyles";
import {useFilterStore} from "../../../store/FilterStore";
import {useRouter} from "next/router";
import {createUrlParamsFromFilterItems} from "../../../services/filterService";

interface CheckboxFilterProps {
    currentFilter: FilterItem;
}

const CheckboxFilter = ({currentFilter}: CheckboxFilterProps) => {
    const {classes} = useStyles();

    const {
        filters, addFilterItemToStore, removeFilterItemFromStore, addFilterValueToStore, removeFilterValueFromStore,
    } = useFilterStore();
    const router = useRouter();

    useEffect(() => {
        //when we change filter store from clicking on checkbox, we should also change url
        const urlParams = createUrlParamsFromFilterItems(filters);
        router.push(`/nft-catalog?${urlParams}`);
    }, [filters]);

    function clickOnFilterValue(filterKey: string, value: string) {
        const clickedFilterItem: FilterItem = filters.filter((e) => e.filterKey === filterKey)[0];

        if (clickedFilterItem) {
            //when filterItem already exists
            if (clickedFilterItem.value.includes(value)) {
                //when value already in the list
                if (clickedFilterItem.value.length == 1) {
                    //when value in the list is the last
                    removeFilterItemFromStore(filterKey);
                } else {
                    //when value in the list is not last
                    removeFilterValueFromStore(filterKey, value);
                }
            } else {
                //when value is not in the list
                addFilterValueToStore(filterKey, value);
            }
        } else {
            //when filterItem not exists
            addFilterItemToStore(filterKey, value, FilterType.CHECKBOX);
        }
    }

    //ToDo refactor (https://app.clickup.com/t/344vp8z)
    function isChecked(value: string) {
        if (currentFilter) {
            const filterItem = filters.filter((e) => e.filterKey === currentFilter.filterKey)[0];
            if (filterItem) {
                let currentFilterItemValue = filterItem.value;
                currentFilterItemValue = currentFilterItemValue.map((e) => e.replaceAll("%20", " "));
                if (currentFilterItemValue) {
                    return currentFilterItemValue.includes(value);
                }
            }
        } else {
            return false;
        }
    }

    return (
        <div className={classes.filter}>
            {currentFilter.value.map((value) => {
                return (
                    <GCCheckbox
                        checked={isChecked(value)}
                        onClick={() => clickOnFilterValue(currentFilter.filterKey, value)}
                        key={value}
                        className={classes.filter}
                        label={value}>
                        {value}
                    </GCCheckbox>
                );
            })}
        </div>
    );
};

export default CheckboxFilter;
