import React from 'react';
import renderer from 'react-test-renderer';

import Layout from '../index';

describe('Layout', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Layout width="medium">This is my app wrapper</Layout>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
