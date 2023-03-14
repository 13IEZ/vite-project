import { describe, expect, it } from 'vitest';
import movieReducer, { initialState } from 'store/reducers/movieReducer';
import { MovieActionTypes } from 'store/types/movieTypes';

const movies = [
  {
    tagline: 'string',
    title: 'string',
    id: 1,
    vote_average: 1,
    vote_count: 1,
    release_date: new Date(),
    poster_path: 'string',
    overview: 'string',
    budget: 1,
    revenue: 1,
    genres: ['Crime'],
    runtime: 1,
  },
  {
    tagline: 'string',
    title: 'string',
    id: 2,
    vote_average: 2,
    vote_count: 2,
    release_date: new Date(),
    poster_path: 'string',
    overview: 'string',
    budget: 2,
    revenue: 2,
    genres: ['Romance'],
    runtime: 2,
  },
];

const movie = {
  tagline: 'string',
  title: 'string',
  id: 3,
  vote_average: 3,
  vote_count: 3,
  release_date: new Date(),
  poster_path: 'string',
  overview: 'string',
  budget: 3,
  revenue: 3,
  genres: ['War'],
  runtime: 3,
};

describe('movieReducer', () => {
  it(MovieActionTypes.FETCH_MOVIES_SUCCESS, () => {
    const newState = movieReducer(initialState, {
      type: MovieActionTypes.FETCH_MOVIES_SUCCESS,
      payload: { ...initialState, data: movies },
    });
    expect(newState.data.length).eq(2);
  });

  it(MovieActionTypes.FETCH_MOVIES_FAILURE, () => {
    const newState = movieReducer(initialState, {
      type: MovieActionTypes.FETCH_MOVIES_FAILURE,
      payload: { ...initialState, isError: true },
    });
    expect(newState.isError).toBeTruthy();
  });

  it(MovieActionTypes.FETCH_EDIT_MOVIE_SUCCESS, () => {
    const newState = movieReducer(initialState, {
      type: MovieActionTypes.FETCH_EDIT_MOVIE_SUCCESS,
      payload: { ...initialState, movie },
    });
    expect(newState.movie?.id).eq(3);
  });

  it(MovieActionTypes.FETCH_EDIT_MOVIE_FAILURE, () => {
    const newState = movieReducer(initialState, {
      type: MovieActionTypes.FETCH_EDIT_MOVIE_FAILURE,
      payload: { ...initialState, isError: true },
    });
    expect(newState.isError).toBeTruthy();
  });

  it(MovieActionTypes.FETCH_VIEW_MOVIE_SUCCESS, () => {
    const newState = movieReducer(initialState, {
      type: MovieActionTypes.FETCH_VIEW_MOVIE_SUCCESS,
      payload: { ...initialState, clickedItem: movie },
    });
    expect(newState.clickedItem?.id).eq(3);
  });

  it(MovieActionTypes.RESET_VIEW_MOVIE, () => {
    const newState = movieReducer(initialState, {
      type: MovieActionTypes.RESET_VIEW_MOVIE,
      payload: { ...initialState, clickedItem: null },
    });
    expect(newState.clickedItem).toBeNull();
  });

  it(MovieActionTypes.DELETE_MOVIE_SUCCESS, () => {
    const newState = movieReducer(initialState, {
      type: MovieActionTypes.DELETE_MOVIE_SUCCESS,
      payload: { ...initialState, data: movies.filter(i => i.id === 2) },
    });
    expect(newState.data.length).eq(1);
  });

  it(MovieActionTypes.UPDATE_MOVIE_SUCCESS, () => {
    const newState = movieReducer(initialState, {
      type: MovieActionTypes.UPDATE_MOVIE_SUCCESS,
      payload: { ...initialState, isError: false },
    });
    expect(newState.isError).toBeFalsy();
  });

  it(MovieActionTypes.UPDATE_MOVIE_FAILURE, () => {
    const newState = movieReducer(initialState, {
      type: MovieActionTypes.UPDATE_MOVIE_FAILURE,
      payload: { ...initialState, isError: true },
    });
    expect(newState.isError).toBeTruthy();
  });
});
