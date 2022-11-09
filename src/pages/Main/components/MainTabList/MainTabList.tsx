import React, { useState } from 'react';
import { Container, Grid, MenuItem } from '@mui/material';
import MainTabListPanel from './components/MainTabListPanel/MainTabListPanel';
import { ColorEnum, StyledText } from '../../../../style/style';
import { StyledSelect, StyledTab, StyledTabs, StyledWrapper } from './MainTabList.style';
import { filmsData, tabsData } from './mockData';

const MainTabList = () => {
  const [tabValue, setTabValue] = useState(0);
  const [filter, setFilter] = useState('1');

  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => setTabValue(newValue);
  const handleChangeFilter = (event: { target: { value: string | unknown } }) =>
    setFilter(event.target.value as string);
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
                <MenuItem value='1'>RELEASE DATE</MenuItem>
                <MenuItem value='4'>Action</MenuItem>
                <MenuItem value='2'>Adventures</MenuItem>
                <MenuItem value='3'>Crime</MenuItem>
              </StyledSelect>
            </Grid>
          </Grid>
        </StyledWrapper>

        <StyledText fontSize='125%' fontWeight={400} color={ColorEnum.WHITE}>
          <strong>39</strong> movies found
        </StyledText>
        <MainTabListPanel value={tabValue} index={tabValue} items={filmsData} />
      </Container>
    </main>
  );
};

export default MainTabList;
