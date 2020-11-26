import React from 'react';
import styled from 'styled-components';

const StyledButton = (props) => {
  const Button = styled.button`
    border: 1px solid black;
    border-radius: 20px;
    font-weight: bold;
    padding: 5px 10px;

    &:hover {
      background-color: ${props.bgColor};
      cursor: pointer;
    }
  `;

  return <Button>{props.children}</Button>;
};

export default StyledButton;
