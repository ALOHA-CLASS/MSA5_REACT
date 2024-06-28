// 🔻 리듀서 정의
import { handleActions } from 'redux-actions';
import { FETCH_SUCCESS, FETCH_FAILURE, FETCH_LIST_SUCCESS, FETCH_LIST_FAILURE } from './actionTypes';


const initialState = {
  board: null,
  boards: [],
  error: null,
};

const board = handleActions(
  {
    [FETCH_SUCCESS]: (state, action) => ({
      ...state,
      board: action.payload,
    }),
    [FETCH_FAILURE]: (state) => ({
      ...state,
    }),
    [FETCH_LIST_SUCCESS]: (state, action) => {
      console.log(action);
      return {
        ...state,
        boards: action.payload,
      }
    },
    [FETCH_LIST_FAILURE]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
  },
  initialState
);

export default board;
