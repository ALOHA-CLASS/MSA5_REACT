// 📦 스토어 정의
import { configureStore } from '@reduxjs/toolkit';
import boardReducer from './board/reducers';
import loading from './loading/reducers'

const rootReducer = {
  board: boardReducer,
  loading: loading
}

const store = configureStore({
  reducer: rootReducer,
});


export default store;