// 📦 액션 생성 함수 정의
import { createAction } from 'redux-actions';
import { FETCH_SUCCESS, FETCH_FAILURE, FETCH_LIST_SUCCESS, FETCH_LIST_FAILURE } from './actionTypes';

export const fetchSuccess = createAction(FETCH_SUCCESS, (data) => data);
export const fetchFailure = createAction(FETCH_FAILURE, (e) => e);

export const fetchListSuccess = createAction(FETCH_LIST_SUCCESS, (data) => data);
export const fetchListFailure = createAction(FETCH_LIST_FAILURE, (e) => e);
