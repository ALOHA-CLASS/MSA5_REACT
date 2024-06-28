// 📦 액션 생성 함수 정의
import { createAction } from 'redux-actions';
import { START_LOADING, END_LOADING } from './actionTypes';

export const startLoading = createAction(
  START_LOADING,
  (actionType) => actionType
);
export const endLoading = createAction(
  END_LOADING,
  (actionType) => actionType
);