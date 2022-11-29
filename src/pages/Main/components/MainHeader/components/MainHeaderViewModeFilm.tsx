import React, { Dispatch, SetStateAction } from 'react';
import dayjs from 'dayjs';
import { Grid, Container, IconButton, Box } from '@mui/material';
import { IIMainTabListPanelItem } from 'pages/Main/components/MainTabList/components/MainTabListPanel/components/MainTabListPanelItem';
import { ColorEnum, StyledText, StyledImg } from 'style/style';
import SearchIcon from '@mui/icons-material/Search';

interface IMainHeaderViewModeFilm {
  clickedItemToView: null | IIMainTabListPanelItem;
  setClickedItemToView: Dispatch<SetStateAction<IIMainTabListPanelItem | null>>;
}

export const MainHeaderViewModeFilm: React.FC<IMainHeaderViewModeFilm> = ({
  clickedItemToView,
  setClickedItemToView,
}) => {
  return (
    <header>
      <Container maxWidth='lg'>
        <Grid container justifyContent='space-between' sx={{ margin: '1.25rem 0 3.75rem' }}>
          <StyledText fontSize='125%' fontWeight={300} color={ColorEnum.PINK}>
            <strong>netflix</strong>roulette
          </StyledText>
          <IconButton size='large' color='inherit' onClick={() => setClickedItemToView(null)}>
            <SearchIcon fontSize='large' />
          </IconButton>
        </Grid>

        <Grid container gap={10} marginBottom='3.75rem' wrap='nowrap'>
          <Grid item xs={4}>
            <StyledImg src={clickedItemToView?.image} alt='movie poster' />
          </Grid>

          <Grid item xs={8}>
            <Grid container>
              <StyledText fontSize='250%' fontWeight={300} color={ColorEnum.WHITE}>
                {clickedItemToView?.title}
              </StyledText>
              <Box
                sx={{
                  borderRadius: '50%',
                  border: '0.06rem solid white',
                  margin: 'auto',
                  padding: '0.5rem',
                }}
              >
                <StyledText fontSize='125%' fontWeight={300} color={ColorEnum.WHITE}>
                  {clickedItemToView?.rating}
                </StyledText>
              </Box>
            </Grid>

            <StyledText fontSize='87.5%' fontWeight={300} color={ColorEnum.GREY}>
              {clickedItemToView?.genre}
            </StyledText>

            <Grid container gap={5} marginTop='1.5rem'>
              <StyledText fontSize='150%' fontWeight={300} color={ColorEnum.PINK}>
                {dayjs(clickedItemToView?.year).year()}
              </StyledText>
              <StyledText fontSize='150%' fontWeight={300} color={ColorEnum.PINK}>
                {clickedItemToView?.runtime} min
              </StyledText>
            </Grid>

            <StyledText fontSize='125%' fontWeight={300} color={ColorEnum.GREY}>
              {clickedItemToView?.overview}
            </StyledText>
          </Grid>
        </Grid>
      </Container>
    </header>
  );
};
