// 🔻 리듀서 정의
import { handleActions } from 'redux-actions';
import { START_LOADING, END_LOADING } from './actionTypes';


const initialState = {
  isLoading: false
};

const loading = handleActions(
  {
    [START_LOADING]: (state, action) => ({
      ...state,
      isLoading: true,
    }),
    [END_LOADING]: (state, action) => ({
      ...state,
      isLoading: false,
    }),
  },
  initialState
);

export default loading;
