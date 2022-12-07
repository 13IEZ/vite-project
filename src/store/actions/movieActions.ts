import ax from 'settings/axios-settings';
import {
  IMovie,
  IMovieAction,
  IMovieErrorState,
  IMovieState,
  ISingleMovieState,
  MovieActionTypes,
  GetMovieType,
  IClickedItem,
} from 'store/types/movieTypes';
import { Dispatch } from 'react';

export const getMovies = (params?: string) => {
  return async (
    dispatch: Dispatch<IMovieAction<MovieActionTypes, IMovieState | IMovieErrorState>>
  ) => {
    try {
      const urlParams = params || '';
      const { data } = await ax.get(`/movies?${urlParams}`);
      dispatch({
        type: MovieActionTypes.FETCH_MOVIES_SUCCESS,
        payload: { ...data, isError: false },
      });
    } catch (e) {
      dispatch({
        type: MovieActionTypes.FETCH_MOVIES_FAILURE,
        payload: { isError: true },
      });
    }
  };
};

export const getMovie = (id: string, type: GetMovieType) => {
  return async (
    dispatch: Dispatch<
      IMovieAction<MovieActionTypes, ISingleMovieState | IClickedItem | IMovieErrorState>
    >
  ) => {
    try {
      const { data } = await ax.get(`/movies/${id}`);

      if (type === GetMovieType.EDIT) {
        dispatch({
          type: MovieActionTypes.FETCH_EDIT_MOVIE_SUCCESS,
          payload: { movie: data },
        });
      } else {
        dispatch({
          type: MovieActionTypes.FETCH_VIEW_MOVIE_SUCCESS,
          payload: { clickedItem: data },
        });
      }
    } catch (e) {
      if (type === GetMovieType.EDIT) {
        dispatch({
          type: MovieActionTypes.FETCH_EDIT_MOVIE_FAILURE,
          payload: { isError: true },
        });
      } else {
        dispatch({
          type: MovieActionTypes.FETCH_VIEW_MOVIE_FAILURE,
          payload: { isError: true },
        });
      }
    }
  };
};

export const deleteMovie = (id: string, params?: string) => {
  return async (dispatch: Dispatch<IMovieAction<MovieActionTypes, IMovieErrorState>>) => {
    try {
      // представим, что удаление возвращает обновленный массив элементов и не приходится их заново просить
      await ax.delete(`movies/${id}`);
      const { data } = await ax.get(`/movies?${params}`);
      dispatch({
        type: MovieActionTypes.DELETE_MOVIE_SUCCESS,
        payload: data,
      });
    } catch (e) {
      dispatch({
        type: MovieActionTypes.DELETE_MOVIE_FAILURE,
        payload: { isError: true },
      });
    }
  };
};

export const addMovie = (data: IMovie) => {
  return async (dispatch: Dispatch<IMovieAction<MovieActionTypes, IMovieErrorState>>) => {
    try {
      await ax.post('/movies', data);
      dispatch({
        type: MovieActionTypes.ADD_MOVIE_SUCCESS,
        payload: { isError: false },
      });
    } catch (e) {
      dispatch({
        type: MovieActionTypes.ADD_MOVIE_FAILURE,
        payload: { isError: true },
      });
    }
  };
};

export const updateMovie = (data: IMovie) => {
  return async (dispatch: Dispatch<IMovieAction<MovieActionTypes, IMovieErrorState>>) => {
    try {
      await ax.put('/movies', data);
      dispatch({
        type: MovieActionTypes.UPDATE_MOVIE_SUCCESS,
        payload: { isError: false },
      });
    } catch (e) {
      dispatch({
        type: MovieActionTypes.UPDATE_MOVIE_FAILURE,
        payload: { isError: true },
      });
    }
  };
};

export const resetClickedMovie = () => {
  return (dispatch: Dispatch<IMovieAction<MovieActionTypes, IClickedItem>>) => {
    dispatch({
      type: MovieActionTypes.RESET_VIEW_MOVIE,
      payload: { clickedItem: null },
    });
  };
};
