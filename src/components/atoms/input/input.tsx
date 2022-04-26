import { useEffect, useState } from 'react';
import SCInput from './input.style';

interface InputCallback<T> {
    // eslint-disable-next-line no-unused-vars
    (changedValue: T): void;
}

enum InputType {
    Number = 'number',
    String = 'text',
    Boolean = 'checkbox',
    Hidden = 'hidden'
}

function Input<T extends string|number|boolean>(
  {
    value,
    onChangeHandler,
  }:
  { value: T,
    onChangeHandler: InputCallback<T>,
  },
) {
  const [inputValue, setInputValue] = useState<T>(value);
  const [hasBeenChanged, setHasBeenChanged] = useState<boolean>(false);

  const isStringInput = () => typeof value === 'string';
  const isNumberInput = () => typeof value === 'number';
  const isBooleanInput = () => typeof value === 'boolean';

  const getInputType = (): InputType => {
    if (isStringInput()) return InputType.String;
    if (isNumberInput()) return InputType.Number;
    if (isBooleanInput()) return InputType.Boolean;
    return InputType.Hidden;
  };

  useEffect(() => {
    if (hasBeenChanged) {
      onChangeHandler(inputValue);
    }
  }, [inputValue]);

  const internalOnChange = (targetElement: HTMLInputElement): void => {
    setHasBeenChanged(true);
    if (isStringInput()) setInputValue(targetElement.value as T);
    else if (isNumberInput()) setInputValue(targetElement.valueAsNumber as T);
    else if (isBooleanInput()) setInputValue(targetElement.checked as T);
    else setInputValue(targetElement.value as T);
  };

  return (
    <SCInput
      type={getInputType()}
      value={inputValue as number|string}
      checked={!!inputValue}
      onChange={(e) => { internalOnChange(e.target); }}
    />
  );
}

export default Input;
