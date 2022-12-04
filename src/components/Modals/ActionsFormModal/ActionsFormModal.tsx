import React, { useEffect, useState } from 'react';
import { Modal, Grid, IconButton, Checkbox, Select, MenuItem, ListItemText } from '@mui/material';
// eslint-disable-next-line import/named
import { SelectChangeEvent } from '@mui/material/Select';
import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {
  StyledModalBody,
  StyledFormModalInput,
  MenuProps,
  SelectStyleProps,
} from './ActionsFormModal.style';
import { PrimaryButton } from 'components';
import { ColorEnum, StyledText } from 'style/style';
import CloseIcon from '@mui/icons-material/Close';
import { useSearchParams } from 'react-router-dom';
import { useActions, useTypedSelectorHook } from 'hooks';
import { IMovie, ISingleMovieState, GetMovieType } from 'store/types/movieTypes';
import { genresData, newMovie } from 'pages/Main/components/MainTabList/mockData';

interface IActionsFormModal {
  isOpen: boolean;
}

export const ActionsFormModal: React.FC<IActionsFormModal> = ({ isOpen }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { movie } = useTypedSelectorHook(state => state.movie) as ISingleMovieState;
  const { getMovie, addMovie, updateMovie } = useActions();
  const isEdit = searchParams.get('isShowModal') !== 'new' && !!movie;
  const [state, setState] = useState<IMovie>(newMovie);

  const handleCloseModal = () => {
    searchParams.delete('isShowModal');
    setSearchParams(searchParams);
  };

  const handleChangeData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isShouldBeNumber = e.target.name === 'runtime' || e.target.name === 'vote_average';
    setState(prev => ({
      ...prev,
      [e.target.name]: isShouldBeNumber ? +e.target.value : e.target.value,
    }));
  };

  const handleChangeGenres = (event: SelectChangeEvent<typeof state.genres>) => {
    const {
      target: { value },
    } = event;
    setState(prev => ({ ...prev, genres: typeof value === 'string' ? value.split(',') : value }));
  };

  const handleSaveMovie = () => {
    isEdit ? updateMovie(state) : addMovie(state);
    searchParams.delete('isShowModal');
    setSearchParams(searchParams);
  };

  useEffect(() => {
    const params = searchParams.get('isShowModal');
    const id = params && params !== 'new';
    id && getMovie(params, GetMovieType.EDIT);
  }, [searchParams]);

  useEffect(() => {
    isEdit ? setState(movie) : setState(newMovie);
  }, [isEdit, movie]);

  return (
    <Modal open={isOpen} onClose={() => handleCloseModal()}>
      <StyledModalBody>
        <Grid container justifyContent='end'>
          <IconButton size='large' color='inherit' onClick={() => handleCloseModal()}>
            <CloseIcon />
          </IconButton>
        </Grid>

        <StyledText fontSize='250%' fontWeight={300} color={ColorEnum.WHITE}>
          {isEdit ? 'EDIT MOVIE' : 'ADD MOVIE'}
        </StyledText>

        <Grid container rowSpacing={2} columnSpacing={4}>
          <Grid item xs={8}>
            <StyledFormModalInput
              value={state?.title}
              onChange={handleChangeData}
              name='title'
              label='TITLE'
              variant='outlined'
              fullWidth
            />
            <StyledFormModalInput
              value={state?.poster_path}
              onChange={handleChangeData}
              name='poster_path'
              label='MOVIE URL'
              variant='outlined'
              fullWidth
            />
            <Select
              sx={SelectStyleProps}
              labelId='demo-multiple-checkbox-label'
              id='demo-multiple-checkbox'
              multiple
              value={state?.genres}
              onChange={handleChangeGenres}
              placeholder='GENRES'
              renderValue={selected => selected.join(', ')}
              MenuProps={MenuProps}
              fullWidth
            >
              {genresData.map(name => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={state.genres.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={4}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label='RELEASE DATE'
                value={state?.release_date}
                onChange={newValue =>
                  setState(prev => ({ ...prev, release_date: dayjs(newValue) }))
                }
                renderInput={params => <StyledFormModalInput {...params} />}
              />
            </LocalizationProvider>

            <StyledFormModalInput
              value={state?.vote_average}
              onChange={handleChangeData}
              name='vote_average'
              label='RATING'
              variant='outlined'
              fullWidth
            />
            <StyledFormModalInput
              value={state?.runtime}
              onChange={handleChangeData}
              name='runtime'
              label='RUNTIME'
              variant='outlined'
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <StyledFormModalInput
              value={state?.overview}
              onChange={handleChangeData}
              name='overview'
              multiline
              minRows={3}
              maxRows={3}
              label='OVERVIEW'
              variant='outlined'
              fullWidth
            />
          </Grid>
        </Grid>

        <Grid container justifyContent='end' alignItems='center' marginTop='2rem' columnSpacing={2}>
          <Grid item xs={2}>
            <PrimaryButton
              clickHandler={() => handleCloseModal()}
              title='Reset'
              isFullWidth
              type='outlined'
            />
          </Grid>
          <Grid item xs={2}>
            <PrimaryButton
              clickHandler={handleSaveMovie}
              title='Save'
              isFullWidth
              type='contained'
            />
          </Grid>
        </Grid>
      </StyledModalBody>
    </Modal>
  );
};
