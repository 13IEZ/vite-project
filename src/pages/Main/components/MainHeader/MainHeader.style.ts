import styled from '@emotion/styled';
import { ColorEnum } from '../../../../style/style';
import { Button } from '@mui/material';
import header_bg from '../../../../assets/images/header-bg.png';

export const StyledHeader = styled.header`
  background-image: url(${header_bg});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const StyledButton = styled(Button)`
  width: 11.25rem;
  height: 2.875rem;
  color: ${ColorEnum.PINK};
  font-family: 'Montserrat', sans-serif;
  font-size: 125%;
  font-weight: 600;
  background: rgba(96, 96, 96, 0.68);
  border-radius: 0.25rem;
`;
