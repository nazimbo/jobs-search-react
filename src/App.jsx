import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const App = () => {
  const name = 'Vite';

  return (
    <>
      <Navbar />
      <Hero />
      <div className='text-5xl'>App</div>
      <div className='text-3xl'>Hello {name}!</div>
    </>
  )
}

export default App