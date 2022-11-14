import styled from '@emotion/styled';
import { Grid, IconButton } from '@mui/material';

export const StyledListPanelItem = styled(Grid)`
  transition: transform 0.5s;
  position: relative;

  &:hover {
    transform: scale(1.02);
  }
`;

export const StyledVertButton = styled(IconButton)`
  position: absolute;
  top: 0.1rem;
  right: 0.1rem;
`;

export const StyledImg = styled.img`
  width: 100%;
  height: 30.375rem;
  cursor: pointer;
`;
