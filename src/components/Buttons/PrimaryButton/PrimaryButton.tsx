import React from 'react';
import { StyledPrimaryButton } from 'components/Buttons/PrimaryButton/PrimaryButton.style';

interface IPrimaryButton {
  title: string;
  type: 'outlined' | 'contained' | 'text';
  isFullWidth?: boolean;
  clickHandler?: () => void;
  isSubmit?: boolean;
  id?: string;
}

export const PrimaryButton: React.FC<IPrimaryButton> = ({
  title,
  type,
  isFullWidth,
  clickHandler,
  isSubmit,
  id,
}) => {
  return (
    <StyledPrimaryButton
      type={isSubmit ? 'submit' : 'button'}
      fullWidth={isFullWidth}
      variant={type}
      onClick={clickHandler}
      id={id}
    >
      {title}
    </StyledPrimaryButton>
  );
};
