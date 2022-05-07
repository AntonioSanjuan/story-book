import { CustomFormData } from '../../../models/internal/Form/FormData.model';
import FormDataValidator from '../../../models/internal/Form/FormDataValidators.model';
import Form from '../../molecules/form/form';
import SCContactUs from './contactUs.style';

function ContactUs() {
  const printSubmit = (e: any) => {
    console.log('input', e);
  };

  const formData: CustomFormData = {
    formName: 'first form',
    formValues: [
      {
        id: 0,
        name: 'email',
        value: '',
        validators: [
          FormDataValidator.Required,
          FormDataValidator.Email,
        ],
      },
      {
        id: 1,
        name: 'edad',
        value: 0,
        validators: [
          FormDataValidator.GreaterThanZero,
        ],
      },
    ],
  };
  return (
    <SCContactUs>
      <p>contact Us</p>
      <div className="contactUs_FormContainer">
        <Form
          data={formData}
          onSubmitHandler={printSubmit}
          hideSubmitButton={false}
        />
      </div>
    </SCContactUs>
  );
}

export default ContactUs;
