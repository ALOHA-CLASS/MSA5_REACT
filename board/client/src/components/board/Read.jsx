import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Read = () => {
  // ❓ useParams() : 경로의 파라미터를 가져오는 훅
  // <Route path="/경로/:param" element={ <컴포넌트 /> }></Route>
  // const { param } = useParams()
  const { no } = useParams()
  return (
    <>
      <h1>게시글 조회</h1>
      <h3>번호 : {no}</h3>
      <Link to="/board">목록</Link>
      <hr />
      <Link to={`/board/update/${no}`}>수정</Link>
    </>
  )
}

export default Read