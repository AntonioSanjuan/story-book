import { CustomForm } from '../../../models/internal/Form/FormData.model';
import Card from '../../molecules/card/card';
import Form from '../../molecules/form/form';
import SCFormExampleBasic from './formExampleBasic.style';

function FormExampleBasic() {
  const formData: CustomForm = {
    formName: 'Basic Form',
    formInputs: [
      {
        id: 0,
        name: 'userName',
        value: '',
      },
      {
        id: 1,
        name: 'userPass',
        value: '',
      },
    ],
  };
  return (
    <SCFormExampleBasic>
      <div className="formExampleBasic_CardContainer">
        <Card
          title="Form Basic"
          icon="apple"
        >
          <Form data={formData} onSubmitHandler={() => {}} />
        </Card>
      </div>
    </SCFormExampleBasic>

  );
}

export default FormExampleBasic;
