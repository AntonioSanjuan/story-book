import { useEffect, useState } from 'react';
import { CustomForm, CustomFormInput } from '../../../models/internal/Form/FormData.model';
import FormInputValidator from '../../../models/internal/Form/FormDataValidators.model';
import Button from '../../atoms/button/button';
import Input from '../../atoms/input/input';
import Text from '../../atoms/text/text';
import SCForm from './form.style';

interface FormCallback {
    // eslint-disable-next-line no-unused-vars
    (value: CustomForm): void;
}

interface FormProps {
  data: CustomForm,
  onSubmitHandler: FormCallback,
  hideSubmitButton?: boolean
}

function Form(
  { data, onSubmitHandler, hideSubmitButton = false }:FormProps,
) {
  const [formData, setFormData] = useState<CustomForm>(data);
  const [hasBeenSubmitted, setHasBeenSubmitted] = useState<boolean>(false);

  const isFormInputValidatorValid = (
    formValue: CustomFormInput,
    validator: FormInputValidator,
  ): boolean => {
    // eslint-disable-next-line no-useless-escape
    const emailRE = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    let isValid: boolean;
    switch (validator) {
      case FormInputValidator.Required:
        isValid = !!formValue.value;
        break;
      case FormInputValidator.GreaterThanZero:
        isValid = formValue.value as number > 0;
        break;
      case FormInputValidator.Email:
        isValid = (formValue.value as any).match(emailRE);
        break;
      default:
        isValid = true;
        break;
    }
    return isValid;
  };

  const validateFormInput = (formInput: CustomFormInput): CustomFormInput => {
    const newFormValue: CustomFormInput = { ...formInput, errors: undefined };
    formInput.validators?.forEach((validator: FormInputValidator) => {
      const isFormValueValid = isFormInputValidatorValid(formInput, validator);
      if (!isFormValueValid) {
        newFormValue.errors = (formInput.errors)
          ? [...formInput.errors, validator]
          : [validator];
      }
    });
    return newFormValue;
  };

  const replaceFormInput = (newFormInput: CustomFormInput): CustomFormInput[] => formData.formInputs
    .map((formInput) => ((newFormInput.name === formInput.name)
      ? newFormInput : formInput));

  const isValidForm = (): boolean => !formData.formInputs.find((formInput) => !!formInput.errors);

  const hasFormInputValidatorsFail = (formInput: CustomFormInput) : boolean => hasBeenSubmitted
  && !!formInput.touched
  && !!formInput.errors;

  useEffect(() => {
    if (hasBeenSubmitted) {
      onSubmitHandler(formData);

      if (isValidForm()) {
        setHasBeenSubmitted(false);
      }
    }
  }, [hasBeenSubmitted]);

  const canBeSubmitted = (): boolean => (hideSubmitButton);

  const updateFormData = (newFormInputs: CustomFormInput[]): void => {
    const newFormData: CustomForm = {
      ...formData,
      formInputs: newFormInputs,
    };
    setFormData(newFormData);
  };

  const validateForm = (): void => {
    const validatedFormInputs = formData.formInputs
      .map((formInput) => validateFormInput(formInput));
    updateFormData(validatedFormInputs);
  };

  const changeFormData = (newFormInput: CustomFormInput): void => {
    const replacedFormInput = replaceFormInput(newFormInput);
    updateFormData(replacedFormInput);
  };

  const changeFormInput = (formInputName: string, newFormInputValue: unknown): void => {
    let auxFormInput = formData.formInputs.find((formInput) => formInput.name === formInputName);
    if (auxFormInput) {
      auxFormInput = validateFormInput({
        ...auxFormInput,
        touched: true,
        value: newFormInputValue,
      });
      changeFormData(auxFormInput);
    }
  };

  const handleChange = (formInputName: string, newFormInputValue: unknown): void => {
    changeFormInput(formInputName, newFormInputValue);
    setHasBeenSubmitted(canBeSubmitted());
  };

  useEffect(() => {
    validateForm();
  }, []);

  return (
    <SCForm>
      <form>
        {formData.formInputs.map((formInput) => (
          <div
            key={formInput.id}
          >
            <Input
              name={formInput.name}
              label={formInput.name}
              value={formInput.value}
              error={hasFormInputValidatorsFail(formInput)}
              onChangeHandler={(val) => {
                handleChange(formInput.name, val);
              }}
            />
            {hasFormInputValidatorsFail(formInput)
            && <Text type="error" data={formInput.errorMsg} />}
          </div>
        ))}
        { !hideSubmitButton
        && (
        <Button
          text="Submit"
          onClick={() => {
            setHasBeenSubmitted(true);
          }}
        />
        )}
      </form>
    </SCForm>

  );
}

export default Form;
