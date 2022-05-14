import { CustomForm } from '../../../models/internal/Form/FormData.model';
import FormDataValidator from '../../../models/internal/Form/FormDataValidators.model';
// import Button from '../../atoms/button/button';
import Form from '../../molecules/form/form';
import SCContactUs from './contactUs.style';

function ContactUs() {
  const printSubmit = (e: any) => {
    console.log('input', e);
  };

  const formData: CustomForm = {
    formName: 'first form',
    formInputs: [
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

      {/* <div className="contactUs_ButtonContainer">
        <p>by size</p>
        <Button size="big" text="big" onClick={() => {}} />
        <Button size="mid" text="mid" onClick={() => {}} />
        <Button size="small" text="small" onClick={() => {}} />
      </div>
      <div className="contactUs_ButtonContainer">
        <p>with icon</p>
        <Button size="big" text="text" icon="ico" onClick={() => {}} />
      </div>
      <div className="contactUs_ButtonContainer">
        <p>by color</p>
        <Button color="primary" text="primary color" onClick={() => {}} />
        <Button color="secondary" text="secondary color" onClick={() => {}} />
        <Button color="accent" text="accent" onClick={() => {}} />
      </div> */}
    </SCContactUs>
  );
}

export default ContactUs;
