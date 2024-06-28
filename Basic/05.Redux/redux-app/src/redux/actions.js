// 📦 액션 생성 함수 정의
import { createAction } from 'redux-actions';
import { INCREMENT, DECREMENT } from './actionTypes';

export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);
