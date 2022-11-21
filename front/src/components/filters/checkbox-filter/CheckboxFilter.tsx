import React, { useEffect } from "react";
import { FilterItem } from "../../../schema/FilterSchema";
import { GCCheckbox } from "../../../gc-components/GCCheckbox";
import { useStyles } from "./CheckboxFilterStyles";
import { useFilterStore } from "../../../store/FilterStore";
import { useRouter } from "next/router";
import { createFilterPostfix } from "../../../services/nftService";

interface CheckboxFilterProps {
  filter: FilterItem;
}

const CheckboxFilter = ({ filter }: CheckboxFilterProps) => {
  const { classes } = useStyles();
  const {
    filters,
    addFilterItem,
    removeFilterItem,
    addFilterValue,
    removeFilterValue,
  } = useFilterStore();
  const router = useRouter();

  function clickOnFilterValue(filterName: string, value: string) {
    const filterItem: FilterItem = filters.filter(
      (e) => e.showName === filter.showName
    )[0];

    // console.log("FILTERS BEFORE", filters);

    if (filterItem) {
      //when filterItem already exists
      if (filterItem.value.includes(value)) {
        //when value already in the list
        if (filterItem.value.length == 1) {
          //when value in the list is the last
          removeFilterItem(filter.showName);
        } else {
          //when value in the list is not last
          removeFilterValue(filter.showName, value);
        }
      } else {
        //when value is not in the list
        addFilterValue(filter.showName, value);
      }
    } else {
      //when filterItem not exists
      addFilterItem(
        filter.showName,
        value,
        filter.filterType,
        filter.filterKey
      );
    }

    const postfix = createFilterPostfix(filters);

    // console.log("FILTERS AFTER", filters);
    // console.log("POSTFIX", postfix);

    router.push(postfix ? `/nft-catalog?${postfix}` : `/nft-catalog`);
  }

  return (
    <div className={classes.filter}>
      {filter.value.map((value) => {
        return (
          <GCCheckbox
            onClick={() => clickOnFilterValue(filter.showName, value)}
            key={value}
            className={classes.filter}
            label={value}
          >
            {value}
          </GCCheckbox>
        );
      })}
    </div>
  );
};

export default CheckboxFilter;
