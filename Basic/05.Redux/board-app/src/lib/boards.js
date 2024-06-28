import api from './api';

// 목록
export const list = () => api.get("/boards")

// 조회
export const select = (no) => api.get(`/boards/${no}`)

// 등록
export const insert = (title, writer, content) => api.post("/boards", {title, writer, content})

// 수정
export const update = (no, title, writer, content) => api.put("/boards", {no,title,writer,content})

// 삭제
export const remove = (no) => api.delete(`/boards/${no}`)