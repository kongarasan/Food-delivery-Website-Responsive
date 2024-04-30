import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from "../src/pages/Home/Home"
import Cart from './pages/Card/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
<Route path='/' element={<Home/>}></Route>
<Route path='/cart' element={<Cart/>}></Route>
<Route path='/order' element={<PlaceOrder/>}></Route>

      </Routes>
    </div>
  )
}

export default App