import { CustomForm } from '../../../models/internal/Form/FormData.model';
import FormInputValidator from '../../../models/internal/Form/FormDataValidators.model';
import Card from '../../molecules/card/card';
import Form from '../../molecules/form/form';
import SCFormExampleWithEmailValidator from './formExampleWithEmailValidator.style';

function FormExampleWithEmailValidator() {
  const formData: CustomForm = {
    formName: 'Basic Form',
    formInputs: [
      {
        id: 0,
        name: 'email',
        value: '',
        validators: [
          { validator: FormInputValidator.Email, errorMsg: 'email format not valid' },
        ],
      },
      {
        id: 1,
        name: 'password',
        value: '',
      },
    ],
  };
  return (
    <SCFormExampleWithEmailValidator>
      <div className="formExampleBasic_CardContainer">
        <Card
          title="Form With Email Validator & errors"
          icon="apple"
        >
          <Form data={formData} onSubmitHandler={(formOutput) => { console.log('epa', formOutput); }} />
        </Card>
      </div>
    </SCFormExampleWithEmailValidator>

  );
}

export default FormExampleWithEmailValidator;
