// 🔻 리듀서 정의
import { handleActions } from 'redux-actions';
import { INCREMENT, DECREMENT } from './actionTypes';

const initialState = {
  count: 0
};

const counterReducer = handleActions(
  // {
  //   [INCREMENT]: (state) => ({ count: state.count + 1 }),
  //   [DECREMENT]: (state) => ({ count: state.count - 1 })
  // },
  {
    [INCREMENT]: (state) => {
      let newCount = state.count
      if( state.count < 10 ) {
        newCount = state.count + 1 
      }
      return { 
        ...state,
        count: newCount
      }
    },
    [DECREMENT]: (state) => {
      let newCount = state.count
      if( state.count > 0 ) {
        newCount = state.count - 1 
      }
      return { 
        ...state,
        count: newCount
      }
    },
  },
  initialState
);

export default counterReducer;
