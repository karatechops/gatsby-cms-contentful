import { grommet } from 'grommet';
import { deepMerge } from 'grommet/utils';
import { css } from 'styled-components';

const theme = deepMerge(
  {
    heading: {
      extend: css`
        font-weight: 100;
      `,
    },
    paragraph: {
      extend: css`
        font-weight: 100;
        max-width: 100%;
      `,
    },
  },
  grommet,
);

export default theme;
