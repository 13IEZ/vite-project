import React from 'react';
import { Grid } from '@mui/material';
import { StyledInput } from 'style/style';
import { PrimaryButton } from 'components';

export const MainHeaderSearchbar = () => {
  return (
    <Grid container alignSelf='center' spacing={3} marginTop='2.5rem' paddingBottom='9.375rem'>
      <Grid item xs={9.5}>
        <StyledInput label='What do you want to watch?' variant='outlined' fullWidth />
      </Grid>
      <Grid item xs={2.5}>
        <PrimaryButton title='search' type='contained' isFullWidth />
      </Grid>
    </Grid>
  );
};
