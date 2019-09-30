import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Hero from '../index';

describe('Hero', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Hero
          title="Starter"
          desc="My description."
          bg="https://test.com/iimage.jpg"
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
