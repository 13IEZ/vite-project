import React from 'react';
import { StyledPrimaryButton } from 'components/Buttons/PrimaryButton/PrimaryButton.style';

interface IPrimaryButton {
  title: string;
  type: 'outlined' | 'contained' | 'text';
  isFullWidth?: boolean;
  clickHandler?: () => void;
}

export const PrimaryButton: React.FC<IPrimaryButton> = ({
  title,
  type,
  isFullWidth,
  clickHandler,
}) => {
  return (
    <StyledPrimaryButton fullWidth={isFullWidth} variant={type} onClick={clickHandler}>
      {title}
    </StyledPrimaryButton>
  );
};
