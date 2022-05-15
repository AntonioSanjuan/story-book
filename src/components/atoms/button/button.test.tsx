import { fireEvent, render, screen } from '@testing-library/react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import Button from './Button';

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
        <Button />
      </Router>,
    );

    expect(container).toBeDefined();
  });
});
