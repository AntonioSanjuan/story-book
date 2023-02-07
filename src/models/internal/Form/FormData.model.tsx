import FormInputValidator from './FormDataValidators.model';

export interface CustomFormInputError {
    validator: FormInputValidator,
    errorMsg?: string
}

export interface CustomFormInput {
    id: number
    name: string
    value: unknown
    touched?: boolean
    validators?: CustomFormInputError[]
    errors?: CustomFormInputError[]
}

export interface CustomForm {
    formName: string,
    formInputs: CustomFormInput[];
}
