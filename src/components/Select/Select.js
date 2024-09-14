import React from 'react';
import { ChevronDown } from 'react-feather';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper tabIndex={0}>
      <Value>{displayedValue}</Value>
    <StyledSelect value={value} onChange={onChange}>
      {children}
    </StyledSelect>
    <ChevronDownIcon id="chevron-down" size={12} />

    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-radius: 8px;
  width: fit-content;
  padding: 8px 12px;
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  border-radius: 8px;
  line-height: 1.2;
  align-items: center;
  gap: 8px;

  &:hover {
    color: ${COLORS.black};
  }

  &:focus {
    border: 1px solid blue;
  }
`;

const Value = styled.span`
  font-size: 12px;
  font-weight: 400;
`;

const StyledSelect = styled.select`
  border: none;
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const ChevronDownIcon = styled(Icon)`
  font-weight: 700;
`;

export default Select;
