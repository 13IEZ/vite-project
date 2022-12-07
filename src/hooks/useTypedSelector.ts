import { useSelector } from 'react-redux';
import { rootStateType } from 'store/configureStore';

export const useTypedSelectorHook = useSelector<rootStateType>;
