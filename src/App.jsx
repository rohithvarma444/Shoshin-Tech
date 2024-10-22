import {BrowserRouter,Routes, Route} from 'react-router-dom'
import { Toaster } from "react-hot-toast";  
import Home from './pages/Home'
import Error from './pages/Error';
import Navbar from './components/dashboard/Navbar';
function App() {

  return (
    <>
      <Toaster position="top-center" reverseOrder={false}/>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='*' element={<Error/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
