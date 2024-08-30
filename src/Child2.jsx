import React from 'react'
import { useSelector } from 'react-redux'

function Child2() {
    const count=useSelector((store)=>store.CountReducer)
  return (
    <div className='text-center font-bold text-4xl' >
        <h1>Child2</h1>
        <h1>Count:{count}</h1>
    </div>
  )
}

export default Child2