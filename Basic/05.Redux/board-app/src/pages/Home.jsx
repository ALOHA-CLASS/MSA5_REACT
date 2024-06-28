import React from 'react'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'

const Home = () => {
  return (
    <>
      <Header />
      <div className='container'>
        <h1 className='text-center p-5'>Home</h1>
        <img src="/img/bg.png" width="100%" />
      </div>
      <Footer />
    </>
  )
}

export default Home