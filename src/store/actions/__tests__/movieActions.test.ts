import { describe, expect, it } from 'vitest';
import thunk from 'redux-thunk';
import { getMovie, getMovies } from 'store/actions/movieActions';
import configureMockStore from 'redux-mock-store';
// eslint-disable-next-line import/named
import { AnyAction } from 'redux';
import { GetMovieType, MovieActionTypes } from 'store/types/movieTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('movieActions', () => {
  it('getMovies success', () => {
    const initialState = {};
    const store = mockStore(initialState);

    return store.dispatch(getMovies() as unknown as AnyAction).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(MovieActionTypes.FETCH_MOVIES_SUCCESS);
    });
  });

  it('getMovie success', () => {
    const initialState = {};
    const store = mockStore(initialState);

    return store
      .dispatch(getMovie('337167', GetMovieType.VIEW) as unknown as AnyAction)
      .then(() => {
        const actions = store.getActions();
        expect(actions[0].type).toEqual(MovieActionTypes.FETCH_VIEW_MOVIE_SUCCESS);
      });
  });

  it('getMovie failure', () => {
    const initialState = {};
    const store = mockStore(initialState);

    return store.dispatch(getMovie('1', GetMovieType.VIEW) as unknown as AnyAction).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(MovieActionTypes.FETCH_VIEW_MOVIE_FAILURE);
    });
  });
});
