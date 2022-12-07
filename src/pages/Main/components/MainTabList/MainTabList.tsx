import React, { Dispatch, SetStateAction } from 'react';
import { Container, Grid } from '@mui/material';
import MainTabListPanel from './components/MainTabListPanel/MainTabListPanel';
import { ColorEnum, StyledText } from 'style/style';
import {
  StyledSelect,
  StyledTab,
  StyledTabs,
  StyledWrapper,
  StyledMenuItem,
} from './MainTabList.style';
import { tabsData, filterData } from './mockData';
import { useTypedSelectorHook } from 'hooks';
import { IMovieState } from 'store/types/movieTypes';

interface IMainTabList {
  tabValue: number;
  setTabValue: Dispatch<SetStateAction<number>>;
  filter: number;
  setFilter: Dispatch<SetStateAction<number>>;
}

export const MainTabList: React.FC<IMainTabList> = ({
  tabValue,
  setTabValue,
  filter,
  setFilter,
}) => {
  const { data, totalAmount } = useTypedSelectorHook(state => state.movie) as IMovieState;

  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => setTabValue(newValue);
  const handleChangeFilter = (event: { target: { value: string | unknown } }) =>
    setFilter(event.target.value as number);

  return (
    <main>
      <Container maxWidth='lg'>
        <StyledWrapper>
          <Grid item>
            <StyledTabs color='primary' value={tabValue} onChange={handleChangeTab}>
              {tabsData.map(i => (
                <StyledTab label={i.title} value={i.id} key={i.id} />
              ))}
            </StyledTabs>
          </Grid>

          <Grid item>
            <Grid container alignItems='center' justifyContent='space-between' gap={1}>
              <StyledText fontSize='100%' fontWeight={400} color={ColorEnum.GREY}>
                SORT BY
              </StyledText>

              <StyledSelect
                size='small'
                value={filter}
                onChange={e => handleChangeFilter(e)}
                defaultValue='1'
              >
                {filterData.map(i => (
                  <StyledMenuItem key={i.id} value={i.id}>
                    {i.title}
                  </StyledMenuItem>
                ))}
              </StyledSelect>
            </Grid>
          </Grid>
        </StyledWrapper>

        <StyledText fontSize='125%' fontWeight={400} color={ColorEnum.WHITE}>
          <strong>{totalAmount}</strong> movies found
        </StyledText>

        <MainTabListPanel value={tabValue} index={tabValue} items={data} />
      </Container>
    </main>
  );
};
