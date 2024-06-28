import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as util from "../../lib/util"

const BoardList = ({ isLoading, boards }) => {
  return (
    <div className="container d-flex flex-column align-items-center mt-5">
      <h2 className="mb-4">게시판 목록</h2>
      {isLoading && <div className="spinner-border" role="status"><span className="visually-hidden">로딩중...</span></div>}
      {!isLoading && boards && (
        <>
          <Link to="/boards/create" className="btn btn-primary mb-3">글쓰기</Link>
          <table className="table table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th scope="col" className="text-center">번호</th>
                <th scope="col" className="text-center">제목</th>
                <th scope="col" className="text-center">작성자</th>
                <th scope="col" className="text-center">등록일시</th>
              </tr>
            </thead>
            <tbody>
              {!boards.length && (
                <tr>
                  <td colSpan="4" className="text-center">List is empty.</td>
                </tr>
              )}
              {!!boards.length && boards.map((board) => (
                <tr key={board.no}>
                  <td className="text-center">{board.no}</td>
                  <td>
                    <Link to={`/boards/${board.no}`}>{board.title}</Link>
                  </td>
                  <td className="text-center">{board.writer}</td>
                  <td className="text-center">
                    { util.formatDate( board.regDate ) }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default BoardList;
