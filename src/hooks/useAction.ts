import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as movieActions from 'store/actions/movieActions';

const actionCreators = {
  ...movieActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actionCreators, dispatch);
};
