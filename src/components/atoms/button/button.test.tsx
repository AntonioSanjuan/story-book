import { fireEvent, render, screen } from '@testing-library/react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import Button from './button';

describe('[Atom] Input component', () => {
  let history: any;

  const onClickSpy = jest.fn(() => {});

  beforeEach(() => {
    history = createMemoryHistory();
  });

  afterEach(() => {
    onClickSpy.mockReset();
  });

  it('should create', () => {
    const { container } = render(
      <Router location={history.location} navigator={history}>
        <Button
          text="hola"
        />
      </Router>,
    );

    expect(container).toBeDefined();
  });

  it('Button should have text displayed', () => {
    const buttonTextSut = 'button text';
    render(
      <Router location={history.location} navigator={history}>
        <Button
          text={buttonTextSut}
        />
      </Router>,
    );

    const button = screen.getByRole('button', { name: buttonTextSut });
    expect(button).toBeDefined();
  });

  it('Button click should trigger onclick handler (spread props)', () => {
    const buttonTextSut = 'button text';
    render(
      <Router location={history.location} navigator={history}>
        <Button
          text={buttonTextSut}
          onClick={() => onClickSpy()}
        />
      </Router>,
    );
    expect(onClickSpy).not.toHaveBeenCalled();
    const button = screen.getByRole('button', { name: buttonTextSut });
    fireEvent.click(button);
    expect(onClickSpy).toHaveBeenCalled();
  });
});
