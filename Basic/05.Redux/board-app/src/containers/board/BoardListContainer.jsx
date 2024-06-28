import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

// 📦 액션 생성 함수 
import { fetchListSuccess, fetchListFailure } from "../../redux/board/actions"
import { startLoading, endLoading } from "../../redux/loading/actions"
// 🚀 api
import * as boardApi from '../../lib/boards'
import BoardList from "../../components/board/BoardList";
import { END_LOADING, START_LOADING } from "../../redux/loading/actionTypes";

const BoardListContainer = () => {
  // 🚚 디스패치
  const dispatch = useDispatch()

  // 🏠 스토어 🧊 상태 선택
  const { boards, isLoading } = useSelector(({ board, loading }) => ({
    boards: board.boards,
    isLoading: loading.isLoading
  }))

  // ⭐ 데이터 요청
  const boardList = useCallback(async () => {
    dispatch( startLoading(START_LOADING) )
    try {
      const response = await boardApi.list()
      const data = await response.data        // ⭐boardList
      console.log(`data : ${data}`);
      dispatch( fetchListSuccess(data) )
      dispatch( endLoading(END_LOADING) )
    } catch (error) {
      dispatch( fetchListFailure(error) )
      dispatch( endLoading(END_LOADING) )
      console.log(error);
      throw error
    }
  }, [dispatch])

  useEffect( () => {
    boardList()
  }, [boardList])

  return (
    <div>
      <BoardList boards={boards} isLoading={isLoading} />
    </div>
  )
}

export default BoardListContainer