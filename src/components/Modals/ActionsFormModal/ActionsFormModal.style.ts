import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { ColorEnum, StyledInput } from 'style/style';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

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
`;

export const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
      color: ColorEnum.WHITE,
      background: ColorEnum.DARK,
    },
  },
};

export const SelectStyleProps = {
  marginTop: '2rem',
  background: 'rgba(50, 50, 50, 0.8)',
  color: 'white',
};
