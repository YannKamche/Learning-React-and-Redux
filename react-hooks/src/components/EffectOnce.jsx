import React, { useEffect, useState } from 'react'

const EffectOnce = () => {
    const [ x, setX ] = useState(0)
    const [ y, setY ] = useState(0)

    const logMousePosition = e => {
        console.log('Mouse event')
        setX(e.clientX)
        setY(e.clientY) 
    }

    useEffect(() => {
        console.log('useEffect called');
        window.addEventListener('mousemove', logMousePosition)
        
        return () => {
          console.log('Component Unmounted')
          window.removeEventListener('mousedown', logMousePosition)
        }
    }, [])
  return (
    <div>
      Hooks X - {x} Y - {y}
    </div>
  )
}

export default EffectOnce
