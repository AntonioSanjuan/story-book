import { fireEvent, render, screen } from '@testing-library/react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { CustomForm, CustomFormInput } from '../../../models/internal/Form/FormData.model';
import FormDataValidator from '../../../models/internal/Form/FormDataValidators.model';
import Form from './form';

describe('[Molecule] Form component', () => {
  let history: any;
  const formData: CustomForm = {
    formName: 'form',
    formInputs: [
        {
          id: 0,
          name: 'email',
          value: '',
          validators: [
          ],
        } as CustomFormInput,
    ],
  };
  const onSubmitHandler = jest.fn(() => {});

  beforeEach(() => {
    history = createMemoryHistory();
  });

  afterEach(() => {
    onSubmitHandler.mockReset();
  });

  it('should create', () => {
    const { container } = render(
      <Router location={history.location} navigator={history}>
        <Form
          data={formData}
          onSubmitHandler={onSubmitHandler}
          hideSubmitButton={false}
        />
      </Router>,
    );

    expect(container).toBeDefined();
  });

  it('Form with !hideSubmitButton should submit on button click', () => {
    render(
      <Router location={history.location} navigator={history}>
        <Form
          data={formData}
          onSubmitHandler={onSubmitHandler}
          hideSubmitButton={false}
        />
      </Router>,
    );
    expect(onSubmitHandler).not.toHaveBeenCalledWith(onSubmitHandler);

    const submitButton = screen.getByRole('button', { name: 'Submit' });
    fireEvent.click(submitButton);
    expect(onSubmitHandler).toHaveBeenCalled();
  });

  it('Form with hideSubmitButton should submit on input change', () => {
    render(
      <Router location={history.location} navigator={history}>
        <Form
          data={formData}
          onSubmitHandler={onSubmitHandler}
          hideSubmitButton
        />
      </Router>,
    );
    expect(onSubmitHandler).not.toHaveBeenCalled();

    const domInput = screen.getByLabelText(formData.formInputs[0].name);
    fireEvent.change(domInput, { target: { value: 'changed value' } });
    expect(onSubmitHandler).toHaveBeenCalled();
  });

  it('Form valid shold submit', () => {
    const formDataWithValidators: CustomForm = {
      formName: 'form',
      formInputs: [
            {
              id: 0,
              name: 'email',
              value: '',
              validators: [
                FormDataValidator.Required,
              ],
            } as CustomFormInput,
      ],
    };
    render(
      <Router location={history.location} navigator={history}>
        <Form
          data={formDataWithValidators}
          onSubmitHandler={onSubmitHandler}
          hideSubmitButton={false}
        />
      </Router>,
    );
    expect(onSubmitHandler).not.toHaveBeenCalled();

    const domInput = screen.getByLabelText(formData.formInputs[0].name);
    fireEvent.change(domInput, { target: { value: 'changedValue' } });
    const submitButton = screen.getByRole('button', { name: 'Submit' });
    fireEvent.click(submitButton);
    expect(onSubmitHandler).toHaveBeenCalled();
  });

  it('Form invalid shold not submit', () => {
    const formDataWithValidators: CustomForm = {
      formName: 'form',
      formInputs: [
            {
              id: 0,
              name: 'email',
              value: '',
              validators: [
                FormDataValidator.Email,
              ],
            } as CustomFormInput,
      ],
    };
    render(
      <Router location={history.location} navigator={history}>
        <Form
          data={formDataWithValidators}
          onSubmitHandler={onSubmitHandler}
          hideSubmitButton={false}
        />
      </Router>,
    );
    expect(onSubmitHandler).not.toHaveBeenCalled();

    const domInput = screen.getByLabelText(formData.formInputs[0].name);
    fireEvent.change(domInput, { target: { value: 'changedValue' } });
    const submitButton = screen.getByRole('button', { name: 'Submit' });
    fireEvent.click(submitButton);
    expect(onSubmitHandler).not.toHaveBeenCalled();
  });
});
