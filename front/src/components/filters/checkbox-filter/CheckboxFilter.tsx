import React, { useEffect } from "react";
import { FilterItem, FilterType } from "../../../schema/FilterSchema";
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
    addFilterItemToStore,
    removeFilterItemFromStore,
    addFilterValueToStore,
    removeFilterValueFromStore,
  } = useFilterStore();
  const router = useRouter();

  useEffect(() => {
    const postfix = createFilterPostfix(filters);
    router.push(`/nft-catalog?${postfix}`);
  }, [filters]);

  function clickOnFilterValue(filterKey: string, value: string) {
    const filterItem: FilterItem = filters.filter(
      (e) => e.filterKey === filterKey
    )[0];

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

  return (
    <div className={classes.filter}>
      {filter.value.map((value) => {
        return (
          <GCCheckbox
            onClick={() => clickOnFilterValue(filter.filterKey, value)}
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
