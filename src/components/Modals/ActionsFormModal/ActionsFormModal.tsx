import React, { useEffect } from 'react';
import { Modal, Grid, IconButton, MenuItem } from '@mui/material';
import { StyledModalBody, StyledFormModalInput } from './ActionsFormModal.style';
import { PrimaryButton } from 'components';
import { ColorEnum, StyledText } from 'style/style';
import CloseIcon from '@mui/icons-material/Close';
import { useSearchParams } from 'react-router-dom';
import { useActions, useTypedSelectorHook } from 'hooks';
import { IMovie, ISingleMovieState, GetMovieType } from 'store/types/movieTypes';
import { genresData } from 'pages/Main/components/MainTabList/mockData';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface IActionsFormModal {
  isOpen: boolean;
}

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Обязательное поле'),
  poster_path: Yup.string().url('Укажите верную ссылку').required('Обязательное поле'),
  vote_average: Yup.number()
    .max(10, 'Число должно быть 10 либо меньше ')
    .required('Обязательное поле'),
  runtime: Yup.number().min(1, 'Время должно быть больше 0').required('Обязательное поле'),
  overview: Yup.string()
    .max(350, 'Текст не должен превышать более 350 символов')
    .required('Обязательное поле'),
  release_date: Yup.date().required('Обязательное поле'),
  genres: Yup.array().min(1, 'Должен быть выбран минимум 1 жанр').required('Обязательное поле'),
});

export const ActionsFormModal: React.FC<IActionsFormModal> = ({ isOpen }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { movie } = useTypedSelectorHook(state => state.movie) as ISingleMovieState;
  const { getMovie, addMovie, updateMovie } = useActions();
  const isEdit = searchParams.get('isShowModal') !== 'new' && !!movie;

  const formik = useFormik<IMovie>({
    initialValues: {
      tagline: 'not empty',
      title: '',
      genres: ['Action', 'Test'],
      poster_path: '',
      vote_average: 0,
      vote_count: 0,
      overview: '',
      release_date: '',
      budget: 0,
      revenue: 0,
      runtime: 0,
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      isEdit ? updateMovie(values) : addMovie(values);
      formik.resetForm();
      searchParams.delete('isShowModal');
      setSearchParams(searchParams);
    },
  });

  const handleCloseModal = () => {
    searchParams.delete('isShowModal');
    setSearchParams(searchParams);
    formik.resetForm();
  };

  useEffect(() => {
    const params = searchParams.get('isShowModal');
    const id = params && params !== 'new';
    id && getMovie(params, GetMovieType.EDIT);
  }, [searchParams]);

  useEffect(() => {
    isEdit && formik.setValues(movie);
  }, [isEdit, movie]);

  return (
    <Modal open={isOpen} onClose={handleCloseModal}>
      <StyledModalBody>
        <Grid container justifyContent='end'>
          <IconButton size='large' color='inherit' onClick={handleCloseModal}>
            <CloseIcon />
          </IconButton>
        </Grid>

        <StyledText fontSize='250%' fontWeight={300} color={ColorEnum.WHITE}>
          {isEdit ? 'EDIT MOVIE' : 'ADD MOVIE'}
        </StyledText>
        <form onSubmit={formik.handleSubmit}>
          <Grid container rowSpacing={2} columnSpacing={4}>
            <Grid item xs={8}>
              <StyledFormModalInput
                value={formik.values.title}
                onChange={formik.handleChange}
                error={formik.touched.title && Boolean(formik.errors.title)}
                helperText={formik.touched.title && formik.errors.title}
                id='tittle'
                name='title'
                label='TITLE'
                variant='outlined'
                fullWidth
              />
              <StyledFormModalInput
                value={formik.values.poster_path}
                onChange={formik.handleChange}
                error={formik.touched.poster_path && Boolean(formik.errors.poster_path)}
                helperText={formik.touched.poster_path && formik.errors.poster_path}
                id='poster_path'
                name='poster_path'
                label='MOVIE URL'
                variant='outlined'
                fullWidth
              />
              <StyledFormModalInput
                select
                fullWidth
                label='GENRES'
                name='genres'
                error={formik.touched.genres && Boolean(formik.errors.genres)}
                helperText={formik.touched.genres && formik.errors.genres}
                SelectProps={{
                  multiple: true,
                  // при пуле фильма с текущими жанрами, жанры не указанные в genresData в value не отобразятся
                  value: formik.values.genres,
                  onChange: formik.handleChange,
                }}
              >
                {genresData.map(name => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </StyledFormModalInput>
            </Grid>
            <Grid item xs={4}>
              <StyledFormModalInput
                name='release_date'
                value={formik.values.release_date}
                onChange={formik.handleChange}
                error={formik.touched.release_date && Boolean(formik.errors.release_date)}
                helperText={formik.touched.release_date && formik.errors.release_date}
                variant='outlined'
                type='date'
                fullWidth
              />
              <StyledFormModalInput
                inputProps={{
                  maxLength: 2,
                }}
                value={formik.values.vote_average}
                onChange={formik.handleChange}
                error={formik.touched.vote_average && Boolean(formik.errors.vote_average)}
                helperText={formik.touched.vote_average && formik.errors.vote_average}
                name='vote_average'
                type='number'
                label='RATING'
                variant='outlined'
                fullWidth
              />
              <StyledFormModalInput
                value={formik.values.runtime}
                onChange={formik.handleChange}
                error={formik.touched.runtime && Boolean(formik.errors.runtime)}
                helperText={formik.touched.runtime && formik.errors.runtime}
                name='runtime'
                label='RUNTIME'
                type='number'
                variant='outlined'
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <StyledFormModalInput
                value={formik.values.overview}
                onChange={formik.handleChange}
                error={formik.touched.overview && Boolean(formik.errors.overview)}
                helperText={formik.touched.overview && formik.errors.overview}
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

          <Grid
            container
            justifyContent='end'
            alignItems='center'
            marginTop='2rem'
            columnSpacing={2}
          >
            <Grid item xs={2}>
              <PrimaryButton
                clickHandler={handleCloseModal}
                title='Reset'
                isFullWidth
                type='outlined'
              />
            </Grid>
            <Grid item xs={2}>
              <PrimaryButton isSubmit title='Save' isFullWidth type='contained' />
            </Grid>
          </Grid>
        </form>
      </StyledModalBody>
    </Modal>
  );
};
