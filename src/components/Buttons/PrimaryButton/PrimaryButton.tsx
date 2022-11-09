import React from 'react';
import { StyledPrimaryButton } from './PrimaryButton.style';

interface IPrimaryButton {
  title: string;
  type: 'outlined' | 'contained' | 'text';
  isFullWidth?: boolean;
}

export const PrimaryButton: React.FC<IPrimaryButton> = ({ title, type, isFullWidth }) => {
  return (
    <StyledPrimaryButton fullWidth={isFullWidth} variant={type}>
      {title}
    </StyledPrimaryButton>
  );
};
