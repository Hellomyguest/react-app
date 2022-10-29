import { useContext } from 'react';
import { Button } from '../../../../shared/ui';
import { FilterDate } from './FilterDate/FilterDate';
import { FilterStatus } from './FilterStatus/FilterStatus';
import { FilterPrice } from './FilterPrice/FilterPrice';
import { FiltersHeader } from './FiltersHeader/FiltersHeader';

import styles from './Filters.module.css';
import { FilterContext } from '../../../../store/FilterContext';

export function Filters() {
  const { filters } = useContext(FilterContext);
  return (
    <div className={styles._}>
      <FiltersHeader filters={filters} />
      {filters.filtersOpen.value && (
        <div className={styles.area}>
          <FilterDate filter={filters.date} />
          <FilterStatus filter={filters.status} />
          <FilterPrice filter={filters.price} />
          <Button
            color="reversePrimary"
            size="medium"
            className={styles.button}
          >
            Применить
          </Button>
        </div>
      )}
    </div>
  );
}
