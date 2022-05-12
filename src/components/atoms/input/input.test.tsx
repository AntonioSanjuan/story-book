import { fireEvent, render, screen } from '@testing-library/react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import Input from './input';

describe('[Atom] Input component', () => {
  let history: any;

  const changeHandlerSpy = jest.fn(() => {});

  beforeEach(() => {
    history = createMemoryHistory();
  });

  afterEach(() => {
    changeHandlerSpy.mockReset();
  });

  it('should create', () => {
    const { container } = render(
      <Router location={history.location} navigator={history}>
        <Input<string> name="string Input" label="label" value="hola" onChangeHandler={changeHandlerSpy} />
      </Router>,
    );

    expect(container).toBeDefined();
  });

  it('Input with string value should trigger changeHandler with changed value', () => {
    const originalInputValue = 'original';
    const changedInputValue = 'changed';

    render(
      <Router location={history.location} navigator={history}>
        <Input<string> name="string Input" label="label" value={originalInputValue} onChangeHandler={changeHandlerSpy} />
      </Router>,
    );

    const domInput = screen.getByDisplayValue(originalInputValue);
    fireEvent.change(domInput, { target: { value: changedInputValue } });
    expect(changeHandlerSpy).toHaveBeenCalledWith(changedInputValue);
  });

  it('Input with boolean value should trigger changeHandler with changed value', () => {
    const originalInputValue = false;
    const changedInputValue = true;

    render(
      <Router location={history.location} navigator={history}>
        <Input<boolean> name="boolean Input" label="label" value={originalInputValue} onChangeHandler={changeHandlerSpy} />
      </Router>,
    );

    const domInput = screen.getByRole('checkbox');
    fireEvent.click(domInput);

    expect(changeHandlerSpy).toHaveBeenCalledWith(changedInputValue);
    expect(typeof changedInputValue).toEqual('boolean');
  });

  it('Input with number value should trigger changeHandler with changed value', () => {
    const originalInputValue = 2;
    const changedInputValue = 3;

    render(
      <Router location={history.location} navigator={history}>
        <Input<number> name="number Input" label="label" value={originalInputValue} onChangeHandler={changeHandlerSpy} />
      </Router>,
    );

    const domInput = screen.getByDisplayValue(originalInputValue);
    fireEvent.change(domInput, { target: { value: changedInputValue } });

    expect(changeHandlerSpy).toHaveBeenCalledWith(changedInputValue);
    expect(typeof changedInputValue).toEqual('number');
  });

  it('Input with number changed with string should trigger changeHandler with NaN (default)', () => {
    const originalInputValue = 2;
    const changedInputValue = 'changedValue';

    render(
      <Router location={history.location} navigator={history}>
        <Input<number> name="number Input" label="label" value={originalInputValue} onChangeHandler={changeHandlerSpy} />
      </Router>,
    );

    const domInput = screen.getByDisplayValue(originalInputValue);
    fireEvent.change(domInput, { target: { value: changedInputValue } });
    expect(changeHandlerSpy).toHaveBeenCalledWith(0);
  });
});
