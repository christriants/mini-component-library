/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

const SIZES = {
  small: {
    '--height': '8px',
    '--padding': 0,
    '--borderRadius': '4px',
  },
  medium: {
    '--height': '12px',
    '--padding': 0,
    '--borderRadius': '4px',
  }, 
  large: {
    '--height': '24px',
    '--padding': '4px',
    '--borderRadius': '8px',
  },
}

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];
  return (
    <ProgressBarWrapper 
      role="progressbar" 
      style={styles} 
      aria-valuenow={value} 
      aria-valuemin="0" 
      aria-valuemax="100"
    >
      <ProgressBarFill role="presentation" value={value} />
    </ProgressBarWrapper>
  );
};

const ProgressBarWrapper = styled.div`
  height: var(--height);
  padding: var(--padding);
  border-radius: var(--borderRadius);
  width: 100%;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const ProgressBarFill = styled.div`
  width: ${props => props.value}%;
  height: 100%;
  background-color: ${COLORS.primary};
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
  border-top-right-radius: ${props => props.value === 100 ? '16px' : 0};
  border-bottom-right-radius: ${props => props.value === 100 ? '16px' : 0};
`;

export default ProgressBar;
