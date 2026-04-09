import { useDispatch, useSelector } from 'react-redux'
import { setActiveTab } from '../redux/features/searchSlice' 

const Tab = () => {
    const tabs = ['Photos','Videos','GIF']
    const dispatch = useDispatch()
    const activeTab = useSelector((state)=>state.search.activeTab)

  return (
    <div className='flex gap-5 p-10'>
      {tabs.map(function(elem,idx){
        return <button key={idx} className={`${(activeTab==elem?'bg-blue-600':'bg-gray-500')} transition cursor-pointer active:scale-95 px-5 py-2  rounded outline-none`}
            onClick={()=>{
                dispatch(setActiveTab(elem))
            }}>
            {elem}
        </button>
      })}
    </div>
  )
}

export default Tab
 