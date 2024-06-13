import React, { useEffect, useState } from 'react'
import Product from './Product';

const ProductList = () => {
  // 🧊 state : list
  const [list, setList] = useState([])
  // ❓ hook : useEffect
  // ⭐ useEffect : 아래 3가지 라이프 사이클 메소드를 결합한 리액트 훅(hook)
  // ✅ hook : 리액트의 함수형 컴포넌트가 가지는 특별한 의미의 함수
  // - componentDidMount      1️⃣
  // - componentDidUpdate     2️⃣
  // - componentWillUnmount 
  useEffect(() => {
   async function fetchData() {
      try {
        const response = await fetch('http://localhost:8080/products');
        const data = await response.json();
        setList(data)     // list state 를 업데이트 ➡ componentDidUpdate
        console.log(data); 
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [])

  return (
    <>
      <div className="container">
        <h1>상품 목록</h1>
        <div className='card-list'>
          {list.map((product, index) => (
            <Product product={product} key={product.id} />
          ))}
        </div>
      </div>
    </>
  )
}

export default ProductList