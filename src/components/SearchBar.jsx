import React from 'react'
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import {setQuery} from '../redux/features/searchSlice'

const SearchBar = () => {
    const [text, setText] = useState('')

    const dispatch = useDispatch()


    const submitHandler = (e)=>{
        e.preventDefault()
        dispatch(setQuery(text))
        setText("")
    }
  return (
    <div>
        <form onSubmit={(e)=>{
            submitHandler(e)
        }}
         className='flex gap-5 p-10 '>
            <input
                value={text}
                onChange={(e)=>{
                    setText(e.target.value)
                }}
                required 
                className='w-full  border-2 px-4 py-2 text-l rounded outline-none ' 
                type="text" 
                placeholder='Search Anything........' 
            />
            <button className='cursor-pointer active:scale-95 border-2 px-4 py-2 rounded outline-none'>Search</button>
        </form>
    </div>
  )
}

export default SearchBar
