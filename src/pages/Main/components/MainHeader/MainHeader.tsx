import React from 'react';
import { Grid, Container, Box } from '@mui/material';
import { StyledText, ColorEnum } from 'style/style';
import { StyledHeader, StyledButton } from './MainHeader.style';
import {
  MainHeaderSearchbar,
  MainHeaderViewModeMovie,
} from 'pages/Main/components/MainHeader/components';
import { useTypedSelectorHook } from 'hooks';
import { useSearchParams } from 'react-router-dom';
import { IClickedItem } from 'store/types/movieTypes';

export const MainHeader = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { clickedItem } = useTypedSelectorHook(state => state.movie) as IClickedItem;

  const handleOpenModal = () => {
    searchParams.set('isShowModal', 'new');
    setSearchParams(searchParams);
  };

  return clickedItem ? (
    <MainHeaderViewModeMovie />
  ) : (
    <StyledHeader>
      <Container maxWidth='lg'>
        <Grid container justifyContent='space-between' sx={{ padding: '1.25rem 0 3.75rem' }}>
          <StyledText fontSize='125%' fontWeight={300} color={ColorEnum.PINK}>
            <strong>netflix</strong>roulette
          </StyledText>
          <StyledButton onClick={() => handleOpenModal()}>+ add movie</StyledButton>
        </Grid>
        <Box sx={{ width: '90%', margin: '0 auto' }}>
          <StyledText variant='h1' fontSize='250%' fontWeight={300} color={ColorEnum.WHITE}>
            FIND YOUR MOVIE
          </StyledText>
          <MainHeaderSearchbar />
        </Box>
      </Container>
    </StyledHeader>
  );
};
