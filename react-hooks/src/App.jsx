import React from 'react'
import Counter from './components/Counter'
import Object from './components/Object'
import Array from './components/Array'

const App = () => {
  return (
   <div className='flex flex-col justify-center items-center bg-slate-300 gap-3 w-screen h-screen'>
      {/* <Counter /> */}
      {/* <Object /> */}
      <Array />
    </div>
  )
}

export default App
