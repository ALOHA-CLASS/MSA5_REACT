import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Join from './pages/Join';
import User from './pages/User';
import Admin from './pages/Admin';
import About from './pages/About';
import Home from './pages/Home';
import LoginContextProvider from './contexts/LoginContextProvider';

function App() {
  return (
    <BrowserRouter>
      <LoginContextProvider>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/join" element={<Join/>}></Route>
          <Route path="/user" element={<User/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/admin" element={ <Admin /> }></Route>
        </Routes>
      </LoginContextProvider>
    </BrowserRouter>
  );
}

export default App;
