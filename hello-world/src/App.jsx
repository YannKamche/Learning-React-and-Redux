import React from 'react'
import Greet from './components/Greet'

const App = () => {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center bg-slate-300 gap-3'>
      <p className='text-3xl font-bold'>Hello World! I am learning React</p>
      <p className='text-5xl font-semibold text-gray-950 leading-snug tracking-wider'>This is my first React Application</p>

      {/* My first Class components */}
      <Greet />
    </div>
  )
}

export default App
