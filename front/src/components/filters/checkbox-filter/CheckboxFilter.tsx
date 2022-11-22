import React, {useEffect} from "react";
import {FilterItem, FilterType} from "../../../schema/FilterSchema";
import {GCCheckbox} from "../../../gc-components/GCCheckbox";
import {useStyles} from "./CheckboxFilterStyles";
import {useFilterStore} from "../../../store/FilterStore";
import {useRouter} from "next/router";
import {createQueryPostfixFromFilterItems} from "../../../services/filterService";

interface CheckboxFilterProps {
    filter: FilterItem;
}

const CheckboxFilter = ({filter}: CheckboxFilterProps) => {
    const {classes} = useStyles();

    const {
        filters, addFilterItemToStore, removeFilterItemFromStore, addFilterValueToStore, removeFilterValueFromStore,
    } = useFilterStore();
    const router = useRouter();

    useEffect(() => {
        //when we change filter store from here, we should also change url
        const postfix = createQueryPostfixFromFilterItems(filters);
        router.push(`/nft-catalog?${postfix}`);
    }, [filters]);

    function clickOnFilterValue(filterKey: string, value: string) {
        const filterItem: FilterItem = filters.filter((e) => e.filterKey === filterKey)[0];

        if (filterItem) {
            //when filterItem already exists
            if (filterItem.value.includes(value)) {
                //when value already in the list
                if (filterItem.value.length == 1) {
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
        if (filter) {
            const filterItem = filters.filter((e) => e.filterKey === filter.filterKey)[0];
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
            {filter.value.map((value) => {
                return (
                    <GCCheckbox
                        checked={isChecked(value)}
                        onClick={() => clickOnFilterValue(filter.filterKey, value)}
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
