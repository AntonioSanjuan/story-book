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
import SCTableExampleWithHideAtPx from './tableExampleWithHideAtPx.style';

function TableExampleWithHideAtPx() {
  // const printSubmit = (e: any) => {
  //   console.log('input', e);
  // };

  const tableData: CustomTable = {
    tableHeaders: [
      {
        name: 'Normal column',
        options: {
          avoidSort: true,
        },
      },
      {
        name: 'Normal column',
        options: {
          avoidSort: true,
        },
      },
      {
        name: 'Hide once vw is less than 800',
        options: {
          avoidSort: true,
          hideLessThan: 800,
        },
      },
    ],
    tableRows: [
      {
        row: [
          {
            value: 'column0 value',
          },
          {
            value: 'column1 value',
          },
          {
            value: <Button text="Action" />,
          },
        ],
      },
      {
        row: [
          {
            value: 'column0 value',
          },
          {
            value: 'column1 value',
          },
          {
            value: <Button text="Action" />,
          },
        ],
      },
    ],
  };
  return (
    <SCTableExampleWithHideAtPx>
      <div className="tableExampleWithHideAtPx_CardContainer">
        <Card
          title="Table with column hide at viweWidth less than 800px"
          icon="apple"
        >
          <Table
            data={tableData}
            onSort={(sortingOptions) => console.log('sortingOptions', sortingOptions)}
          />
        </Card>
      </div>

    </SCTableExampleWithHideAtPx>
  );
}

export default TableExampleWithHideAtPx;
