import React from 'react'
import BoardCreateContainer from '../../containers/board/BoardCreateContainer'
import MainLayout from '../../layouts/MainLayout'

const BoardCreatePage = () => {
  return (
    <>
      <MainLayout>
        <BoardCreateContainer />
      </MainLayout>
    </>
  )
}

export default BoardCreatePage