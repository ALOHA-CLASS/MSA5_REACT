import React, { useEffect, useState } from 'react'
import Product from './Product';

const ProductList = () => {
  const [list, setList] = useState([])
  useEffect(() => {
   async function fetchData() {
      try {
        const response = await fetch('http://localhost:8080/products');
        const data = await response.json();
        setList(data)
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