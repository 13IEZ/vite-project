import { Dayjs } from 'dayjs';

export enum MovieActionTypes {
  FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS',
  FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE',
  FETCH_EDIT_MOVIE_SUCCESS = 'FETCH_MOVIES_SUCCESS',
  FETCH_EDIT_MOVIE_FAILURE = 'FETCH_MOVIE_FAILURE',
  DELETE_MOVIE_SUCCESS = 'DELETE_MOVIE_SUCCESS',
  DELETE_MOVIE_FAILURE = 'DELETE_MOVIE_FAILURE',
  ADD_MOVIE_SUCCESS = 'ADD_MOVIE_SUCCESS',
  ADD_MOVIE_FAILURE = 'ADD_MOVIE_FAILURE',
  UPDATE_MOVIE_SUCCESS = 'UPDATE_MOVIE_SUCCESS',
  UPDATE_MOVIE_FAILURE = 'UPDATE_MOVIE_FAILURE',
  FETCH_VIEW_MOVIE_SUCCESS = 'FETCH_CLICKED_MOVIE_SUCCESS',
  FETCH_VIEW_MOVIE_FAILURE = 'FETCH_CLICKED_MOVIE_FAILURE',
  RESET_VIEW_MOVIE = 'RESET_VIEW_MOVIE',
}

export interface IMovie {
  tagline: string;
  title: string;
  id?: number;
  vote_average: number;
  vote_count: number;
  release_date: Dayjs | Date;
  poster_path: string;
  overview: string;
  budget: number;
  revenue: number;
  genres: string[];
  runtime: number;
}

export interface IMovieState {
  data: IMovie[];
  totalAmount: number;
  offset: number;
  limit: number;
}

export interface IMovieErrorState {
  isError: boolean;
}

export interface ISingleMovieState {
  movie: IMovie | null;
}

export interface IClickedItem {
  clickedItem: IMovie | null;
}

export interface IMovieAction<Type, Payload> {
  type: Type;
  payload: Payload;
}

export enum GetMovieType {
  EDIT = 'EDIT',
  VIEW = 'VIEW',
}
