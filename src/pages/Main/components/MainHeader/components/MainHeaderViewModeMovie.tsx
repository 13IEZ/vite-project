import React from 'react';
import dayjs from 'dayjs';
import { Grid, Container, IconButton, Box } from '@mui/material';
import { ColorEnum, StyledText, StyledImg } from 'style/style';
import SearchIcon from '@mui/icons-material/Search';
import { useTypedSelectorHook, useActions } from 'hooks';
import { IClickedItem } from 'store/types/movieTypes';

export const MainHeaderViewModeMovie = () => {
  const { clickedItem } = useTypedSelectorHook(state => state.movie) as IClickedItem;
  const { resetClickedMovie } = useActions();

  return (
    <header>
      <Container maxWidth='lg'>
        <Grid container justifyContent='space-between' sx={{ margin: '1.25rem 0 3.75rem' }}>
          <StyledText fontSize='125%' fontWeight={300} color={ColorEnum.PINK}>
            <strong>netflix</strong>roulette
          </StyledText>
          <IconButton size='large' color='inherit' onClick={() => resetClickedMovie()}>
            <SearchIcon fontSize='large' />
          </IconButton>
        </Grid>

        <Grid container gap={10} marginBottom='3.75rem' wrap='nowrap'>
          <Grid item xs={4}>
            <StyledImg src={clickedItem?.poster_path} alt='movie poster' />
          </Grid>

          <Grid item xs={8}>
            <Grid container>
              <StyledText fontSize='250%' fontWeight={300} color={ColorEnum.WHITE}>
                {clickedItem?.title}
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
                  {clickedItem?.vote_average}
                </StyledText>
              </Box>
            </Grid>

            <StyledText fontSize='87.5%' fontWeight={300} color={ColorEnum.GREY}>
              {clickedItem?.genres.join(', ')}
            </StyledText>

            <Grid container gap={5} marginTop='1.5rem'>
              <StyledText fontSize='150%' fontWeight={300} color={ColorEnum.PINK}>
                {dayjs(clickedItem?.release_date).year()}
              </StyledText>
              <StyledText fontSize='150%' fontWeight={300} color={ColorEnum.PINK}>
                {clickedItem?.runtime} min
              </StyledText>
            </Grid>

            <StyledText fontSize='125%' fontWeight={300} color={ColorEnum.GREY}>
              {clickedItem?.overview}
            </StyledText>
          </Grid>
        </Grid>
      </Container>
    </header>
  );
};
