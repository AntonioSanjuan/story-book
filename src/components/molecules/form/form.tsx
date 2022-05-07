import { useEffect, useState } from 'react';
import { CustomFormData, CustomFormValue } from '../../../models/internal/Form/FormData.model';
import FormDataValidator from '../../../models/internal/Form/FormDataValidators.model';
import Input from '../../atoms/input/input';
import SCForm from './form.style';

interface FormCallback {
    // eslint-disable-next-line no-unused-vars
    (value: CustomFormData): void;
}

function Form(
  { data, onSubmitHandler, hideSubmitButton }
  :
  { data: CustomFormData, onSubmitHandler: FormCallback, hideSubmitButton: boolean},
) {
  const [formEle, setFormEle] = useState<CustomFormData>(data);
  const [hasBeenSubmitted, setHasBeenSubmitted] = useState<boolean>(false);

  const isFormValueValidatorValid = (value: any, validator: FormDataValidator): boolean => {
    // eslint-disable-next-line no-useless-escape
    const emailRE = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    let isValid: boolean;
    switch (validator) {
      case FormDataValidator.Required:
        isValid = !!value;
        break;
      case FormDataValidator.GreaterThanZero:
        isValid = value > 0;
        break;
      case FormDataValidator.Email:
        isValid = value.match(emailRE);
        break;
      default:
        isValid = true;
        break;
    }
    return isValid;
  };

  const addFormValueError = (
    formValue: CustomFormValue,
    validator: FormDataValidator,
  ): FormDataValidator[] => (formValue.errors
    ? [...formValue.errors, validator]
    : [validator]);

  const isValidForm = (): boolean => {
    let isValid = true;

    const auxFormValues: CustomFormValue[] = formEle.formValues
      .map((formValue: CustomFormValue) => {
        let newFormValue: CustomFormValue = { ...formValue, errors: undefined };
        formValue.validators?.forEach((validator: FormDataValidator) => {
          const isFormValueValid = isFormValueValidatorValid(formValue.value, validator);
          if (!isFormValueValid) {
            newFormValue = { ...newFormValue, errors: addFormValueError(newFormValue, validator) };
            isValid = false;
          }
        });
        return newFormValue;
      });
    setFormEle({ ...formEle, formValues: auxFormValues });
    return isValid;
  };

  useEffect(() => {
    if (hasBeenSubmitted) {
      if (isValidForm()) {
        onSubmitHandler(formEle);
        setHasBeenSubmitted(false);
      } else {
        // to do
        console.log('not valid, show erros!');
      }
    }
  }, [hasBeenSubmitted]);

  const getShouldBeSubmitted = (): boolean => (hideSubmitButton);

  const findAndReplaceFormEle = (changedEleName: string, changedEleValue: any) => {
    const foundIndex = formEle.formValues.findIndex((value) => value.name === changedEleName);
    const auxFormEle = { ...formEle };
    auxFormEle.formValues[foundIndex] = {
      ...auxFormEle.formValues[foundIndex],
      name: changedEleName,
      value: changedEleValue,
    };
    setFormEle(auxFormEle);
  };

  const handleChange = (changedEleName: string, changedEleValue: any) => {
    findAndReplaceFormEle(changedEleName, changedEleValue);
    setHasBeenSubmitted(getShouldBeSubmitted());
  };

  return (
    <SCForm>
      <form>
        {formEle.formValues.map((formValue) => (
          <div
            key={formValue.id}
          >
            <Input
              value={formValue.value}
              onChangeHandler={(val) => {
                handleChange(formValue.name, val);
              }}
              placeholder={formValue.name}
            />
            { }
          </div>
        ))}
        { !hideSubmitButton
        && (
        <button
          type="button"
          onClick={() => {
            setHasBeenSubmitted(true);
          }}
        >
          Submit
        </button>

        )}
      </form>
    </SCForm>

  );
}

export default Form;
