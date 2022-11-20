import styled from '@emotion/styled';
import { Tab, Tabs, Box, Select, MenuItem } from '@mui/material';
import { ColorEnum } from 'style/style';

export const StyledTab = styled(Tab)`
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-size: 100%;
  font-weight: 500;

  &:hover {
    color: ${ColorEnum.DARKER_PINK};
  }

  &.Mui-selected {
    color: ${ColorEnum.PINK};
  }
`;

export const StyledTabs = styled(Tabs)`
  & .MuiTabs-indicator {
    background-color: ${ColorEnum.PINK};
  }
`;

export const StyledWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  border-bottom: 0.125rem solid ${ColorEnum.DARKER_GREY};
  margin-bottom: 2.875rem;
`;

export const StyledSelect = styled(Select)`
  color: ${ColorEnum.WHITE};
  font-weight: 500;
  border: none;
  font-family: 'Montserrat', sans-serif;
  font-size: 100%;

  & .MuiOutlinedInput-notchedOutline {
    border: 0;
  }

  & .MuiSvgIcon-root {
    color: ${ColorEnum.PINK};
  }
`;

export const StyledMenuItem = styled(MenuItem)`
  &.MuiMenuItem-root.Mui-selected {
    background-color: ${ColorEnum.DARKER_PINK};
  }

  &:hover {
    background-color: ${ColorEnum.PINK};
    color: ${ColorEnum.WHITE};
  }

  &:active {
    background-color: ${ColorEnum.DARKER_PINK};
  }

  &:focus {
    background-color: ${ColorEnum.DARKER_PINK};
    color: ${ColorEnum.WHITE};
    &:hover {
      background-color: ${ColorEnum.PINK};
    }
  }
`;
