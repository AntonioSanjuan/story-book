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
import SCTableExampleWithStickyScroll from './tableExampleWithStickyScroll.style';

function TableExampleWithStickyScroll() {
  // const printSubmit = (e: any) => {
  //   console.log('input', e);
  // };

  const tableData: CustomTable = {
    activeSortedColumnName: 'id',
    activeSortedColumnDirection: 'asc',
    tableHeaders: [
      {
        name: 'id',
        options: {
          // hideLessThan: 700,
          avoidSort: true,
          stickyOnScroll: true,
          width: 50,
        },
      },
      {
        name: 'name',
        options: {
          // hideLessThan: 700,
          stickyOnScroll: true,
          avoidSort: true,
          width: 100,
        },
      },
      {
        name: 'subname',
        options: {
          width: 250,
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
            value: 'josefin de la rosa castro mendez',
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
    <SCTableExampleWithStickyScroll>
      <div className="tableExampleWithStickyScroll_CardContainer">
        <Card
          title="Table with sticky columns"
          icon="apple"
        >
          <Table
            data={tableData}
            onSort={(sortingOptions) => console.log('sortingOptions', sortingOptions)}
          />
        </Card>
      </div>

    </SCTableExampleWithStickyScroll>
  );
}

export default TableExampleWithStickyScroll;
