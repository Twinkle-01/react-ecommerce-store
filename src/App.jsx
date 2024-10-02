import { useContext } from 'react'
import './App.css'
import Login from './Pages/auth/logIn'
import { Toaster } from 'react-hot-toast'
import HomePage from './Pages/homePage'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import { GlobalContext } from './Context/globalContext'
import Register from './Pages/auth/Register'
import ProductDetails from './Pages/productDetails'
import ProductCategory from './Pages/productCategory'
import NotFound from './Pages/NotFound'
import SearchProduct from './Pages/searchProduct'

function App() {
  const {user} = useContext(GlobalContext)

  return (
     <div>
       <Toaster/>
       <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={!user?<Login/>:<Navigate to="/"/>}/>
        <Route path='/register' element={!user?<Register/>:<Navigate to="/"/>}/>
        <Route path='productDetails/:id' element={<ProductDetails/>}/> 
        <Route path='/category/:title' element={<ProductCategory/>}/> 
        <Route path='*' element={<NotFound/>}/>   
        <Route path='/search/:query' element={<SearchProduct/>}/> 
      </Routes>
     </div>
  )
}

export default App