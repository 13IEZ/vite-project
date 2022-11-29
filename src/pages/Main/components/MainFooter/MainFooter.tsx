import React from 'react';
import { Container, Grid } from '@mui/material';
import { ColorEnum, StyledText } from 'style/style';
import { StyledFooter } from 'pages/Main/components/MainFooter/MainFooter.style';

export const MainFooter = () => {
  return (
    <StyledFooter>
      <Container maxWidth='lg'>
        <Grid container justifyContent='center'>
          <StyledText fontSize='125%' fontWeight={300} color={ColorEnum.PINK} padding='1.4rem'>
            <strong>netflix</strong>roulette
          </StyledText>
        </Grid>
      </Container>
    </StyledFooter>
  );
};
