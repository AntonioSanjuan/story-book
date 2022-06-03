import { render } from '@testing-library/react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import Text from './text';

describe('[Atom] Input component', () => {
  let history: any;

  beforeEach(() => {
    history = createMemoryHistory();
  });

  it('should create', () => {
    const { container } = render(
      <Router location={history.location} navigator={history}>
        <Text
          data=""
        />
      </Router>,
    );

    expect(container).toBeDefined();
  });

  it('input should contain the data text', () => {
    const dataSut = 'testing data';
    const { container } = render(
      <Router location={history.location} navigator={history}>
        <Text
          data={dataSut}
        />
      </Router>,
    );

    expect(container).toHaveTextContent(dataSut);
  });
});
