import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './redux/actions';
import 'bootstrap/dist/css/bootstrap.min.css'
import Swal from 'sweetalert2';
import { useEffect } from 'react';


function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  useEffect(() => {
    if (count === 10) {
      Swal.fire({
        title: 'Count 상한!',
        text: '10까지만 가능합니다!',
        icon: 'warning',
        confirmButtonText: '확인'
      });
    }
    if (count === 0) {
      Swal.fire({
        title: 'Count 하한!',
        text: '0까지만 가능합니다.!',
        icon: 'error',
        confirmButtonText: '확인'
      });
    }
  }, [count]);

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="card text-center p-4 shadow">
        <h1 className="card-title">Counter</h1>
        <h3>{count}</h3>
        <div className="card-body">
          <button className="btn btn-primary me-2" onClick={() => dispatch(increment())}>Increment</button>
          <button className="btn btn-danger" onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
      </div>
    </div>
  );
}

export default App;
