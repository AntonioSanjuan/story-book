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
import SCTableExampleWithPosition from './tableExampleWithPosition.style';

function TableExampleWithPosition() {
  // const printSubmit = (e: any) => {
  //   console.log('input', e);
  // };

  const tableData: CustomTable = {
    tableHeaders: [
      {
        name: 'Partido',
        options: {
          avoidSort: true,
        },
      },
      {
        name: 'Resultado',
        options: {
          position: 'right',
          avoidSort: true,
        },
      },
      {
        name: 'Acciones',
        options: {
          position: 'right',
          avoidSort: true,

        },
      },
    ],
    tableRows: [
      {
        row: [
          {
            value: 'Almeria VS Tenerife',
          },
          {
            value: '* - *',
          },
          {
            value: <Button text="Buy ticket" />,
          },
        ],
      },
      {
        row: [
          {
            value: 'Gran Canaria - Murcia',
          },
          {
            value: '* - *',
          },
          {
            value: <Button text="Buy ticket" />,
          },
        ],
      },
    ],
  };
  return (
    <SCTableExampleWithPosition>
      <div className="tableExampleWithPosition_CardContainer">
        <Card
          title="Table with positions"
          icon="apple"
        >
          <Table
            data={tableData}
            onSort={(sortingOptions) => console.log('sortingOptions', sortingOptions)}
          />
        </Card>
      </div>

    </SCTableExampleWithPosition>
  );
}

export default TableExampleWithPosition;
