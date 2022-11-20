import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
import MainTabListPanel from './components/MainTabListPanel/MainTabListPanel';
import { IIMainTabListPanelItem } from './components/MainTabListPanel/components/MainTabListPanelItem/MainTabListPanelItem';
import { ColorEnum, StyledText } from '../../../../style/style';
import {
  StyledSelect,
  StyledTab,
  StyledTabs,
  StyledWrapper,
  StyledMenuItem,
} from './MainTabList.style';
import { tabsData } from './mockData';

interface IMainTabList {
  data: IIMainTabListPanelItem[];
  handleOpenEditFilm: (id: number) => void;
  handleDeleteFilm: (id: number) => void;
  setData: Dispatch<SetStateAction<IIMainTabListPanelItem[]>>;
}

const MainTabList: React.FC<IMainTabList> = ({
  data,
  handleOpenEditFilm,
  handleDeleteFilm,
  setData,
}) => {
  const [tabValue, setTabValue] = useState(1);
  const [filter, setFilter] = useState('1');

  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => setTabValue(newValue);
  const handleChangeFilter = (event: { target: { value: string | unknown } }) =>
    setFilter(event.target.value as string);

  useEffect(() => {
    if (filter === '1') {
      setData(prev => prev.map(i => ({ ...i, isVisible: true })));
    } else if (filter === '2') {
      setData(prev => prev.map(i => ({ ...i, isVisible: i.genre === 'Action' })));
    } else if (filter === '3') {
      setData(prev => prev.map(i => ({ ...i, isVisible: i.genre === 'Adventures' })));
    } else if (filter === '4') {
      setData(prev => prev.map(i => ({ ...i, isVisible: i.genre === 'Crime' })));
    }
  }, [filter]);

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
                <StyledMenuItem value='1'>Release Date</StyledMenuItem>
                <StyledMenuItem value='2'>Action</StyledMenuItem>
                <StyledMenuItem value='3'>Adventures</StyledMenuItem>
                <StyledMenuItem value='4'>Crime</StyledMenuItem>
              </StyledSelect>
            </Grid>
          </Grid>
        </StyledWrapper>

        <StyledText fontSize='125%' fontWeight={400} color={ColorEnum.WHITE}>
          <strong>{data.filter(i => i.isVisible).length}</strong> movies found
        </StyledText>

        <MainTabListPanel
          value={tabValue}
          index={tabValue}
          items={data}
          handleOpenEditFilm={handleOpenEditFilm}
          handleDeleteFilm={handleDeleteFilm}
        />
      </Container>
    </main>
  );
};

export default MainTabList;
