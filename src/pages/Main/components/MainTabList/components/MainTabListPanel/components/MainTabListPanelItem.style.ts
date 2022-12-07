import styled from '@emotion/styled';
import { Grid, IconButton } from '@mui/material';
import { ColorEnum } from 'style/style';

export const StyledListPanelItem = styled(Grid)`
  transition: transform 0.5s;
  position: relative;

  &:hover {
    transform: scale(1.02);
  }
`;

export const StyledVertButton = styled(IconButton)`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background-color: ${ColorEnum.DARK};
  opacity: 0.7;
`;
