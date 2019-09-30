import React from 'react';
import renderer from 'react-test-renderer';
import { useStaticQuery } from 'gatsby';
import 'jest-styled-components';
import Header from '../index';

beforeEach(() => {
  useStaticQuery.mockReturnValue({
    site: {
      siteMetadata: {
        title: 'My site',
      },
    },
  });
});

describe('Header', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
