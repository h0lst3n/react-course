import React from 'react';

import styles from './style.module.scss';

export default props => (
  <div className={styles['layout-container']} >
    <h2 className="global-class">Layout title:</h2>
    {props.children}
  </div>
);
