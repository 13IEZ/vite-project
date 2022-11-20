import React, { Dispatch, SetStateAction } from 'react';
import { Grid, Container, Box } from '@mui/material';
import { StyledText, ColorEnum } from '../../../../style/style';
import { StyledHeader, StyledButton } from './MainHeader.style';
import MainHeaderSearchbar from './components/MainHeaderSearchbar/MainHeaderSearchbar';

interface IMainHeader {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const MainHeader: React.FC<IMainHeader> = ({ setIsOpen }) => {
  return (
    <StyledHeader>
      <Container maxWidth='lg'>
        <Grid container justifyContent='space-between' sx={{ margin: '1.25rem 0 3.75rem' }}>
          <StyledText fontSize='125%' fontWeight={300} color={ColorEnum.PINK}>
            <strong>netflix</strong>roulette
          </StyledText>
          <StyledButton onClick={() => setIsOpen(true)}>+ add movie</StyledButton>
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

export default MainHeader;
