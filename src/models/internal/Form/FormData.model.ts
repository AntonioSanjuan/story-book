import FormDataValidator from './FormDataValidators.model';

export interface CustomFormValue {
    id: number
    name: string
    value: any
    validators?: FormDataValidator[]
    errors?: FormDataValidator[]
}

export interface CustomFormData {
    formName: string,
    formValues: CustomFormValue[];
}
