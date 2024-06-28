import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import BoardListPage from './pages/board/BoardListPage';
import About from './pages/about/About';
import BoardCreatePage from './pages/board/BoardCreatePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home /> }></Route>
        <Route path='/boards/:no' element={ <BoardListPage/> }></Route>
        <Route path='/boards/create' element={ <BoardCreatePage/> }></Route>
        <Route path='/boards' element={ <BoardListPage/> }></Route>
        <Route path='/about' element={ <About/> }></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// ⭐
// <BrowserRouter>  : 라우팅 활성화
// <Routes>         : <Route> 컴포넌트 정의하는 영역
// 🔗 경로 설정 (라우팅)
// <Route path='/경로' element={ <컴포넌트 /> }></Route>

// 🔗➡💻 라우터로 이동하는 방법
// <Link to="/경로">경로 이름</Link>
// : 실제로는 a 태그 처럼 렌더링 된다.