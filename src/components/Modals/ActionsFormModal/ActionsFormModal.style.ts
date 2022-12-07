import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { ColorEnum, StyledInput } from 'style/style';

export const StyledModalBody = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 61rem;
  padding: 2rem;
  transform: translate(-50%, -50%);
  background-color: ${ColorEnum.DARK};
`;

export const StyledFormModalInput = styled(StyledInput)`
  margin-top: 2rem;
  & label.Mui-focused,
  label {
    color: ${ColorEnum.PINK};
  }

  & .MuiFormHelperText-root {
    background-color: ${ColorEnum.DARK};
    margin: 0;
  }
`;
