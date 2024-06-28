import React from 'react'
import BoardCreateForm from '../../components/board/BoardCreateForm';
import { useNavigate } from 'react-router-dom'
// 🚀 api
import * as boardApi from '../../lib/boards'

const BoardCreateContainer = () => {
  const navigate = useNavigate()
  const onCreate = async (title, content, writer) => {
    try {
      const response = await boardApi.insert(title, content, writer);

      alert("등록되었습니다.");
      navigate("/read/" + response.data.boardNo)
      
    } catch (e) {
      console.log(e);
    }
  };

  return <BoardCreateForm onCreate={onCreate} />;
}

export default BoardCreateContainer