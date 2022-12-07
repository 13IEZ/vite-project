import {
  IClickedItem,
  IMovieAction,
  IMovieErrorState,
  IMovieState,
  ISingleMovieState,
  MovieActionTypes,
} from 'store/types/movieTypes';

interface IMovieReducer extends IMovieState, IMovieErrorState, ISingleMovieState, IClickedItem {}

const initialState: IMovieReducer = {
  data: [],
  totalAmount: 0,
  offset: 0,
  limit: 0,
  //когда то это будет нотификация, но я не успел
  isError: false,
  movie: null,
  clickedItem: null,
};

const reducer = (
  state = initialState,
  action: IMovieAction<MovieActionTypes, IMovieReducer>
): IMovieReducer => {
  switch (action.type) {
    case MovieActionTypes.FETCH_MOVIES_SUCCESS:
    case MovieActionTypes.DELETE_MOVIE_SUCCESS:
      return { ...state, ...action.payload };
    case MovieActionTypes.FETCH_MOVIES_FAILURE:
      return { ...state, isError: action.payload.isError };
    case MovieActionTypes.FETCH_EDIT_MOVIE_SUCCESS:
      return { ...state, movie: action.payload.movie };
    case MovieActionTypes.FETCH_EDIT_MOVIE_FAILURE:
    case MovieActionTypes.FETCH_VIEW_MOVIE_FAILURE:
      return { ...state, isError: action.payload.isError };
    case MovieActionTypes.DELETE_MOVIE_FAILURE:
    case MovieActionTypes.ADD_MOVIE_SUCCESS:
    case MovieActionTypes.ADD_MOVIE_FAILURE:
    case MovieActionTypes.UPDATE_MOVIE_SUCCESS:
    case MovieActionTypes.UPDATE_MOVIE_FAILURE:
      return { ...state, isError: action.payload.isError };
    case MovieActionTypes.FETCH_VIEW_MOVIE_SUCCESS:
      return { ...state, clickedItem: action.payload.clickedItem };
    case MovieActionTypes.RESET_VIEW_MOVIE:
      return { ...state, clickedItem: action.payload.clickedItem };
    default:
      return state;
  }
};

export default reducer;
