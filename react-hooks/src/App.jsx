import React from 'react'
import Counter from './components/Counter'
import Object from './components/Object'
import Array from './components/Array'
import Effect from './components/Effect'

const App = () => {
  return (
   <div className='flex flex-col justify-center items-center bg-slate-300 gap-3 w-screen h-screen'>
      {/* <Counter /> */}
      {/* <Object /> */}
      {/* <Array /> */}
      <Effect />
    </div>
  )
}

export default App