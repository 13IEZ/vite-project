import { css } from '@emotion/react';
import { Typography, TextField } from '@mui/material';
import styled from '@emotion/styled';

export const enum ColorEnum {
  PINK = '#F65261',
  DARKER_PINK = '#a63740',
  DARKER_GREY = '#727272',
  DARKEST_GREY = '#424242',
  DARK = '#232323',
  WHITE = '#ffffff',
  GREY = '#868686',
}

interface IStyledText {
  color: ColorEnum;
}

interface IStyledInput {
  height?: string;
}

export const GlobalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,600;1,200;1,300;1,400;1,500;1,600&display=swap');

  body {
    height: 100%;
    font-size: 100%;
    color: ${ColorEnum.WHITE};
    background: ${ColorEnum.DARK};
  }
`;

export const StyledText = styled(Typography)<IStyledText>`
  color: ${props => props.color};
  font-family: 'Montserrat', sans-serif;
`;

export const StyledInput = styled(TextField)<IStyledInput>`
  background: rgba(50, 50, 50, 0.8);

  & label,
  .MuiOutlinedInput-root {
    font-family: 'Montserrat', sans-serif;
  }

  & label.Mui-focused,
  label {
    color: ${ColorEnum.WHITE};
    opacity: 0.5;
  }

  & .MuiOutlinedInput-root {
    color: ${ColorEnum.WHITE};
    font-size: 120%;
    & fieldset {
      border-color: rgba(50, 50, 50);
    }

    &:hover fieldset,
    &.Mui-focused fieldset {
      border-color: ${ColorEnum.PINK};
    }
  }
`;

export const StyledImg = styled.img`
  width: 100%;
  height: 30.375rem;
  cursor: pointer;
`;
