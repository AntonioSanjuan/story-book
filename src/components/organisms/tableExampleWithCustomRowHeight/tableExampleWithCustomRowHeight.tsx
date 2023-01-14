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
import SCTableExampleWithCustomRowHeight from './tableExampleWithCustomRowHeight.style';

function TableExampleWithCustomRowHeight() {
  const tableData: CustomTable = {
    height: 50,
    tableHeaders: [
      {
        name: 'id',
        options: {
          avoidSort: true,
        },
      },
      {
        name: 'name',
        options: {
          avoidSort: true,
        },
      },
      {
        name: 'subname',
        options: {
          avoidSort: true,
        },
      },
      {
        name: 'tlf',
        options: {
          avoidSort: true,
        },
      },
      {
        name: 'action',
        options: {
          avoidSort: true,
        },
      },
    ],
    tableRows: [
      {
        row: [
          {
            value: 0,
          },
          {
            value: 'pepe',
          },
          {
            value: 'manolo',
          },
          {
            value: 9999999999,
          },
          {
            value: <Button text="Ver" />,
          },
        ],
      },
      {
        row: [
          {
            value: 1,
          },
          {
            value: 'name',
          },
          {
            value: 'subname',
          },
          {
            value: 2424242424,
          },
          {
            value: <Button text="Ver" />,
          },
        ],
      },
    ],
  };
  return (
    <SCTableExampleWithCustomRowHeight>
      <div className="tableExampleWithCustomRowHeight_CardContainer">
        <Card
          title="Table with custom row height 50px"
          icon="apple"
        >
          <Table
            data={tableData}
            onSort={(sortingOptions) => console.log('sortingOptions', sortingOptions)}
          />
        </Card>
      </div>

    </SCTableExampleWithCustomRowHeight>
  );
}

export default TableExampleWithCustomRowHeight;
