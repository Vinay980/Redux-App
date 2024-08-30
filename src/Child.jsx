import React from 'react'
import { useSelector,useDispatch } from 'react-redux'


function Child() {
    // to consume the redux 
    const count=useSelector((store)=>store.CountReducer)
    // storing the useDispatch hook
    const dispatch=useDispatch()
    // function increamentHandler(){
    //     dispatch({type:'inc'})
    // }
    
    
  return (
    <>
        <div className='text-center m-5'>
        <h1 className=' font-bold'>Child Component</h1>
        <h1 className=' font-bold'>{count}</h1>
        <button className='py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700' onClick={()=>dispatch({type:"inc"})}>INC</button>
        <button className='py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700' onClick={()=>dispatch({type:"dec"})}>DEC</button>
        </div>
    </>
  )
}

export default Child