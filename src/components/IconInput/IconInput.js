import React, { useRef } from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    '--width': '150px',
    '--fontSize': '14px',
    '--borderBottom': '1px solid black',
  },
  large: {
    '--width': '300px',
    '--fontSize': '18px',
    '--borderBottom': '2px solid black',
  },
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const inputRef = useRef();
  const styles = SIZES[size];
  return (
    <InputWrapper style={styles}>
        <Icon 
          id={icon} 
          size={size === 'sm' ? 8 : 12} 
          onClick={() => inputRef?.current.focus()}
        />
        <Input 
          aria-label={label}
          ref={inputRef} 
          placeholder={placeholder}
          style={{
            '--width': width + 'px',
          }}
        />
    </InputWrapper>
  )
};

const InputWrapper = styled.div`
  width: var(--width);
  display: flex;
  flex-direction: row;
  color: ${COLORS.gray700};
  font-size: var(--fontSize);
  align-items: center;
  gap: 4px;
  border-bottom: var(--borderBottom); 
  font-weight: 400;

  &:focus-within {
    outline: 1px solid blue;
  }

  &:hover {
    color: black;
  }
`;

const Input = styled.input`
  border: none;
  outline: none; 
  color: ${COLORS.gray700};
  width: var(--width);

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

export default IconInput;
