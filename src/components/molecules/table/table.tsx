import { CustomTable, CustomTableRow, CustomTableRowElem } from '../../../models/internal/Table/TableData.model';
import SCTable from './table.style';
import Text from '../../atoms/text/text';

interface TableProps {
  data: CustomTable,
  emptyDataMsg?: string
}

function Table({ data, emptyDataMsg }: TableProps) {
  return (
    <SCTable
      tableHeaders={data.tableHeaders}
    >
      <table>
        {/* Headers */}
        {data.tableHeaders && data.tableHeaders.length > 0 && (
          <thead>
            <tr>
              {data.tableHeaders.map((tableHeader) => (
                <td>{tableHeader.name}</td>
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
