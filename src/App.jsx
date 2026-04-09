import {Routes,Route} from 'react-router-dom'
import HomePage from './Pages/HomePage'
import CollectionPage from './Pages/CollectionPage'
import { ToastContainer} from 'react-toastify';
const App = () => {
  return (
    <div className='min-h-screen w-full text-white bg-gray-950'>

      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/collection' element={<CollectionPage />}></Route>
      </Routes>
      <ToastContainer/>
      
    </div>
  )
}

export default App
