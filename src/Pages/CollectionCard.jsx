import React from 'react'
import { useDispatch } from 'react-redux'
import { removeCollection, removeToast } from '../redux/features/collectionSlice'

const CollectionCard = ({item}) => {
    const dispatch = useDispatch()
    const removeFromCollection = (item)=>{
        dispatch(removeCollection(item))
        dispatch(removeToast())
  }
  return (
    <div >
      <div className='h-60 w-[17vw] relative bg-gray-950 text-white rounded-xl overflow-hidden '>
        <a target="_blank" href={item.url} className='h-full'>
          {item.type=='photo'?<img className='h-full w-full object-cover object-center' src={item.src} alt=""/>:''}
          {item.type=='video'? <video className='h-full w-full object-cover object-center' autoPlay loop muted src={item.src}></video>:'' }
          {item.type=='gif'?<img className='h-full w-full object-cover object-center' src={item.src} alt=""/>:''}
        </a>

        <div id='bottom' className='absolute gap-2 flex justify-between overflow-hidden items-start h-15 w-full py-3 px-2 bottom-0 text-white '>
          <h2 className='text-medium font-semibold capitalize'>{item.title}</h2>
          <button 
            onClick={()=>{
              removeFromCollection(item)
            }} 
            className='bg-blue-700 px-2 py-0.5 border-none rounded text-sm font-semibold items-center cursor-pointer active:scale-90'>
              Remove
          </button>
        </div>
    </div>
    </div>
  )
}

export default CollectionCard
