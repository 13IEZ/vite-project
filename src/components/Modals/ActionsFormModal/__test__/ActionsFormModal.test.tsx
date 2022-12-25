import React from 'react';
import { expect, it, describe } from 'vitest';
import store from 'store/configureStore';
import { ActionsFormModal } from 'components';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

describe('ActionsFormModal', () => {
  it('should render modal', () => {
    const component = render(
      <Provider store={store}>
        <MemoryRouter>
          <ActionsFormModal isOpen={true} />
        </MemoryRouter>
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
});
