import React from 'react'
import Header from './Header'
import ProductDetails from './ProductDetails'
import { Route,Routes } from 'react-router-dom'
import Home from './Home'
import DetailsProductById from './DetailsProductById'
import Cart from './Cart'
import Search from './Search'
import Footer from './Footer'
import Login from './Login'
import SignUp from './SignUp'
import ProductNotFound from './ProductNotFound'
const App = () => {
  return (
    <div>
     <Header/>
    
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/category/:name' element={<ProductDetails/>}/>
      <Route path='/product/:id' element={<DetailsProductById/>}/>
      <Route path='/Cart'element={<Cart/>} />
      <Route path='/search/:item'element={<Search/>}/>
      <Route path='/login'element={<Login/>}/>
      <Route path='/signup'element={<SignUp/>}/>
      <Route path='/productNotFound' element={<ProductNotFound/>}/>
     </Routes>
     <Footer/>
    </div>
  )
}

export default App
