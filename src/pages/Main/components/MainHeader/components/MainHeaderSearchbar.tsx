import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { StyledInput } from 'style/style';
import { PrimaryButton } from 'components';
import { useActions } from 'hooks';
import { useSearchParams } from 'react-router-dom';

export const MainHeaderSearchbar = () => {
  const [value, setValue] = useState('');
  const [searchParams] = useSearchParams();
  const { getMovies } = useActions();

  const handleClickSearch = () => {
    //в апи невозможно искать по названию и сохранить фильтра по жанру
    getMovies(value ? `searchBy=title&search=${value}` : searchParams.toString());
  };

  return (
    <Grid container alignSelf='center' spacing={3} marginTop='2.5rem' paddingBottom='9.375rem'>
      <Grid item xs={9.5}>
        <StyledInput
          value={value}
          onChange={e => setValue(e.target.value)}
          label='What do you want to watch?'
          variant='outlined'
          id='test-id-input'
          fullWidth
        />
      </Grid>
      <Grid item xs={2.5}>
        <PrimaryButton
          clickHandler={handleClickSearch}
          title='search'
          type='contained'
          isFullWidth
          id='test-id-btn'
        />
      </Grid>
    </Grid>
  );
};
