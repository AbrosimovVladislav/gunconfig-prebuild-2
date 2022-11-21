import React, { useEffect } from "react";
import { FilterItem } from "../../../schema/FilterSchema";
import { GCCheckbox } from "../../../gc-components/GCCheckbox";
import { useStyles } from "./CheckboxFilterStyles";
import { addFilterValue, useFilterStore } from "../../../store/FilterStore";
import { useRouter } from "next/router";
import { createFilterPostfix } from "../../../services/nftService";

interface CheckboxFilterProps {
  filter: FilterItem;
}

const CheckboxFilter = ({ filter }: CheckboxFilterProps) => {
  const { classes } = useStyles();
  const {
    filters,
    addFilterItemToStore,
    removeFilterItemFromStore,
    addFilterValueToStore,
    removeFilterValueFromStore,
  } = useFilterStore();
  const router = useRouter();

  useEffect(() => {
    const postfix = createFilterPostfix(filters);
    router.push(postfix ? `/nft-catalog?${postfix}` : `/nft-catalog`);
  }, [filters]);

  function clickOnFilterValue(filterName: string, value: string) {
    const filterItem: FilterItem = filters.filter(
      (e) => e.showName === filter.showName
    )[0];

    // console.log("FILTERS BEFORE", filters);
    let updatedFilters = [...filters];

    if (filterItem) {
      //when filterItem already exists
      if (filterItem.value.includes(value)) {
        //when value already in the list
        if (filterItem.value.length == 1) {
          //when value in the list is the last
          removeFilterItemFromStore(filter.showName);
        } else {
          //when value in the list is not last
          removeFilterValueFromStore(filter.showName, value);
        }
      } else {
        //when value is not in the list
        addFilterValueToStore(filter.showName, value);
      }
    } else {
      //when filterItem not exists
      addFilterItemToStore(
        filter.showName,
        value,
        filter.filterType,
        filter.filterKey
      );
    }
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
