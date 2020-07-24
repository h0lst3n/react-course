import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

import {buttonOne} from './styles.module.scss';

const Button1 = ({label}) => (
  <button className={buttonOne}>{label}</button>
);

const Button2 = ({label}) => {
  const Button = styled.button`
    background: black;
    color: white;
    font-size: 14px;
    line-height: 22px;
    width: 140px;
    padding: 15px;
    border-radius: 5px;
  `;

  return (
    <Button>{label}</Button>
  );
};

const Button3 = ({label}) => (
  <Button color="primary" size="medium" varian="outlined">{label}</Button>
);

export {Button1, Button2, Button3};
