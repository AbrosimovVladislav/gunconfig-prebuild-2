import React from "react";
import {FilterItem} from "../../../schema/FilterSchema";
import {GCCheckbox} from "../../../gc-components/GCCheckbox";
import {useStyles} from "./CheckboxFilterStyles";
import {useRouter} from "next/router";
import {
    addParamToUrl,
    addParamValueToUrl,
    getParamFromUrlByKey,
    removeParamFromUrl, removeParamValueFromUrl
} from "../../../services/urlService";

interface CheckboxFilterProps {
    currentFilter: FilterItem;
}

const CheckboxFilter = ({currentFilter}: CheckboxFilterProps) => {
    const {classes} = useStyles();
    const router = useRouter();

    function clickOnFilterValue(filterKey: string, value: string) {
        const clickedFilter = getParamFromUrlByKey(router, filterKey);

        if (clickedFilter) {
            //when filterItem already exists
            if (clickedFilter.value.includes(value)) {
                //when value already in the list
                if (clickedFilter.value.length == 1) {
                    //when value in the list is the last
                    removeParamFromUrl(router, filterKey);
                } else {
                    //when value in the list is not last
                    removeParamValueFromUrl(router, filterKey, value);
                }
            } else {
                //when value is not in the list
                addParamValueToUrl(router, filterKey, value);
            }
        } else {
            //when filterItem not exists
            addParamToUrl(router, {key:filterKey, value:[value]});
        }
    }

    //ToDo refactor (https://app.clickup.com/t/344vp8z)
    // function isChecked(value: string) {
    //     if (currentFilter) {
    //         const filterItem = filters.filter((e) => e.filterKey === currentFilter.filterKey)[0];
    //         if (filterItem) {
    //             let currentFilterItemValue = filterItem.value;
    //             currentFilterItemValue = currentFilterItemValue.map((e) => e.replaceAll("%20", " "));
    //             if (currentFilterItemValue) {
    //                 return currentFilterItemValue.includes(value);
    //             }
    //         }
    //     } else {
    //         return false;
    //     }
    // }

    return (
        <div className={classes.filter}>
            {currentFilter.value.map((value) => {
                return (
                    <GCCheckbox
                        // checked={isChecked(value)}
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
