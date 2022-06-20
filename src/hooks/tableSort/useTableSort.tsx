import { useState } from 'react';
import Icons from '../../models/internal/styled-components/Icons/Icons.model';
import Sorts from '../../models/internal/styled-components/Sorts/Sorts.model';
import { CustomTableSort } from '../../models/internal/Table/TableData.model';

const useTableSort = (initialSortingOptions: CustomTableSort) => {
  const [hasBeenSorted, setHasBeenSorted] = useState<boolean>(false);
  const [sortingOptions, setSortingOptions] = useState<CustomTableSort>(initialSortingOptions);

  const getActiveColumnIcon = (): keyof Icons => {
    let activeColumnIcon: keyof Icons|undefined;
    switch (sortingOptions.activeSortedColumnDirection) {
      case 'asc':
        activeColumnIcon = 'chevronUp';
        break;
      case 'desc':
        activeColumnIcon = 'chevronDown';
        break;
      default:
        // to-do
        activeColumnIcon = 'alarm';
        break;
    }
    return activeColumnIcon;
  };

  const getColumnIcon = (columnName: string): keyof Icons => {
    if (columnName === sortingOptions.activeSortedColumnName) {
      return getActiveColumnIcon();
    }
    return 'chevronUp';
  };

  const getNextSortedDirec = (currentDirection: keyof Sorts|undefined):
    keyof Sorts|undefined => {
    let nextSortDirec: keyof Sorts|undefined;
    switch (currentDirection) {
      case 'asc':
        nextSortDirec = 'desc';
        break;
      case 'desc':
        nextSortDirec = undefined;
        break;
      default:
        nextSortDirec = 'asc';
        break;
    }
    return nextSortDirec;
  };

  const sortColumn = (sortedColumnName: string) => {
    if (sortingOptions?.activeSortedColumnName === sortedColumnName) {
      setSortingOptions({
        ...sortingOptions,
        activeSortedColumnDirection: getNextSortedDirec(sortingOptions.activeSortedColumnDirection),
      });
    } else {
      setSortingOptions({
        activeSortedColumnName: sortedColumnName,
        activeSortedColumnDirection: getNextSortedDirec(undefined),
      });
    }
    setHasBeenSorted(true);
  };

  return {
    getNextSortedDirec,
    sortColumn,
    getColumnIcon,
    hasBeenSorted,
    sortingOptions,
  };
};

export default useTableSort;
