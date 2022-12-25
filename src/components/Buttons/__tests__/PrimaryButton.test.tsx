import React from 'react';
import { PrimaryButton } from 'components';
import { expect, it, describe } from 'vitest';
import renderer from 'react-test-renderer';

describe('PrimaryButton', () => {
  it('should be rendered correctly', () => {
    const tree = renderer.create(<PrimaryButton title='Test title' type='outlined' />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
