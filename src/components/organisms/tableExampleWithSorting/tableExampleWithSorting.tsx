// import { CustomForm } from '../../../models/internal/Form/FormData.model';
// import FormDataValidator from '../../../models/internal/Form/FormDataValidators.model';
import { CustomTable } from '../../../models/internal/Table/TableData.model';
import Button from '../../atoms/button/button';
// import Icon from '../../atoms/icons/icon';
// import Icon from '../../atoms/icons/icon';
// import Text from '../../atoms/text/text';
// import Tooltip from '../../atoms/tooltip/tooltip';
import Card from '../../molecules/card/card';
// import Form from '../../molecules/form/form';
import Table from '../../molecules/table/table';
import SCTableExampleWithSorting from './tableExampleWithSorting.style';

function TableExampleWithSorting() {
  // const printSubmit = (e: any) => {
  //   console.log('input', e);
  // };

  const tableData: CustomTable = {
    activeSortedColumnName: 'Result',
    activeSortedColumnDirection: 'asc',
    tableHeaders: [
      {
        name: 'Match',
      },
      {
        name: 'Result',
      },
      {
        name: 'Acctions',
      },
    ],
    tableRows: [
      {
        row: [
          {
            value: 'Almeria - Tenerife',
          },
          {
            value: '1-0',
          },
          {
            value: <Button text="Buy ticket" disabled />,
          },
        ],
      },
      {
        row: [
          {
            value: 'Gran Canaria - Murcia',
          },
          {
            value: '5-0',
          },
          {
            value: <Button text="Buy ticket" disabled />,
          },
        ],
      },
    ],
  };
  return (
    <SCTableExampleWithSorting>
      <div className="tableExampleWithSorting_CardContainer">
        <Card
          title="Table with sortings"
          icon="apple"
        >
          <Table
            data={tableData}
            onSort={(sortingOptions) => console.log('sortingOptions', sortingOptions)}
          />
        </Card>
      </div>

    </SCTableExampleWithSorting>
  );
}

export default TableExampleWithSorting;
