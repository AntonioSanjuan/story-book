import { useEffect } from 'react';
import {
  CustomTable, CustomTableRow, CustomTableRowElem, CustomTableSort,
} from '../../../models/internal/Table/TableData.model';
import SCTable from './table.style';
import Text from '../../atoms/text/text';
import useTableSort from '../../../hooks/tableSort/useTableSort';
import Icon from '../../atoms/icons/icon';

interface TableCallback {
  // eslint-disable-next-line no-unused-vars
  (value: CustomTableSort): void;
}

interface TableProps {
  data: CustomTable,
  emptyDataMsg?: string
  onSort?: TableCallback
}

function Table({ data, emptyDataMsg, onSort }: TableProps) {
  const {
    sortColumn,
    getColumnIcon,
    sortingOptions,
    hasBeenSorted,
  } = useTableSort(
    {
      activeSortedColumnDirection: data.activeSortedColumnDirection,
      activeSortedColumnName: data.activeSortedColumnName,
    },
  );

  useEffect(() => {
    if (hasBeenSorted && onSort) {
      onSort(sortingOptions as CustomTableSort);
    }
  }, [sortingOptions]);

  return (
    <SCTable
      tableHeaders={data.tableHeaders}
      sortingOptions={sortingOptions}
    >
      <table className="table table-responsive">
        {/* Headers */}
        {data.tableHeaders && data.tableHeaders.length > 0 && (
          <thead>
            <tr>
              {data.tableHeaders.map((tableHeader) => (
                <td
                  role="gridcell"
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...(
                    onSort
                    && !tableHeader.options?.avoidSort
                    && { onClick: () => { sortColumn(tableHeader.name); } })
                  }
                >
                  <div className="TableTd_Container">
                    {tableHeader.name}
                    <div className="TableTd_Icon">
                      <Icon icon={getColumnIcon(tableHeader.name)} />
                    </div>

                  </div>

                </td>
              ))}
            </tr>
          </thead>
        )}
        {/* Data */}
        {data.tableRows && data.tableRows.length > 0 && (
          <tbody>
              {data.tableRows.map((tableRow: CustomTableRow) => (
                <tr>
                  {tableRow.row.map((rowElement: CustomTableRowElem) => (
                    <td>{rowElement.value ?? rowElement.options?.defaultValue}</td>
                  ))}
                </tr>

              ))}
          </tbody>
        )}

        {(!data.tableRows || data.tableRows.length === 0) && (
          <Text data={emptyDataMsg ?? 'No data'} />
        )}
      </table>
    </SCTable>
  );
}

export default Table;
