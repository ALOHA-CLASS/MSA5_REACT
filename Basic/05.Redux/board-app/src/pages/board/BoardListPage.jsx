import React from 'react'
import Header from '../../layouts/Header'
import Footer from '../../layouts/Footer'
import BoardListContainer from '../../containers/board/BoardListContainer'
import MainLayout from '../../layouts/MainLayout'

const BoardListPage = () => {
  return (
    <>
      <MainLayout>
        <BoardListContainer />
      </MainLayout>
    </>
  )
}

export default BoardListPage