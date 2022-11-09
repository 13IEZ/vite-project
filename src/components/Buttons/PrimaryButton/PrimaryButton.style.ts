import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { ColorEnum } from '../../../style/style';

export const StyledPrimaryButton = styled(Button)`
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 125%;
  height: 3.75rem;
  color: ${props => (props.variant === 'contained' ? ColorEnum.WHITE : ColorEnum.PINK)};
  border-radius: 0.25rem;
  background-color: ${props => props.variant === 'contained' && ColorEnum.PINK};
  border-color: ${props => props.variant === 'outlined' && ColorEnum.PINK};

  &:hover {
    background-color: ${props => props.variant === 'contained' && ColorEnum.DARKER_PINK};
    border-color: ${props => props.variant === 'outlined' && ColorEnum.DARKER_PINK};
  }
`;
