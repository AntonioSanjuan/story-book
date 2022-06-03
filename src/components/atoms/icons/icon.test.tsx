import { render, screen } from '@testing-library/react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import Icon from './icon';

describe('[Atom] Input component', () => {
  let history: any;

  beforeEach(() => {
    history = createMemoryHistory();
  });

  it('should create', () => {
    const { container } = render(
      <Router location={history.location} navigator={history}>
        <Icon
          icon="alarm"
        />
      </Router>,
    );

    expect(container).toBeDefined();
  });

  it('icon should contain i', () => {
    const iconTitle = 'title';
    render(
      <Router location={history.location} navigator={history}>
        <Icon
          icon="alarm"
          title={iconTitle}
        />
      </Router>,
    );
    const icon = screen.getByTitle(iconTitle);
    expect(icon).toBeDefined();
  });
});
