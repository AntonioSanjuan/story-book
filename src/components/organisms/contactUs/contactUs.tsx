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
import SCContactUs from './contactUs.style';

function ContactUs() {
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
          hideLessThan: 700,
          stickyOnScroll: true,
        },
      },
      {
        name: 'name',
        options: {
          hideLessThan: 700,
        },
      },
      { name: 'subname' },
      { name: 'tlf' },
      {
        name: 'action',
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
            value: 0,
          },
          {
            value: 'tony',
          },
          {
            value: 'sanjuan',
          },
          {
            value: 627239365,
          },
          {
            value: <Button text="epa" />,
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
            value: <Button text="epa2" />,
          },
        ],
      },
    ],
  };
  // const formData: CustomForm = {
  //   formName: 'first form',
  //   formInputs: [
  //     {
  //       id: 0,
  //       name: 'email',
  //       value: '',
  //       validators: [
  //         FormDataValidator.Required,
  //         FormDataValidator.Email,
  //       ],
  //     },
  //     {
  //       id: 1,
  //       name: 'edad',
  //       value: 0,
  //       validators: [
  //         FormDataValidator.GreaterThanZero,
  //       ],
  //     },
  //   ],
  // };
  return (
    <SCContactUs>
      <div className="contactUs_CardContainer">
        <Card
          title="Table"
          icon="apple"
        >
          <Table
            data={tableData}
            onSort={(sortingOptions) => console.log('sortingOptions', sortingOptions)}
          />
        </Card>
      </div>

    </SCContactUs>
  );
}

export default ContactUs;
