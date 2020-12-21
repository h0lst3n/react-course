import React from 'react';
import withTheme from '../../HOC/withTheme';

import css from './StyledAreaItem.module.scss';

const StyledAreaItem = ({theme, children}) => (
  <div className={css[`area-item-${theme}`]}>
    { children }
  </div>
);

export default withTheme(StyledAreaItem);
