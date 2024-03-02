// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from "./components/navbar/Navbar.jsx";
import {BrowserRouter , Routes, Route} from 'react-router-dom';
import Shop from "./pages/Shop.jsx";
import ShopCategory from "./pages/ShopCategory.jsx";
import Product from "./pages/Product.jsx";
import Cart from "./pages/Cart.jsx";
import LoginSignUp from "./pages/LoginSignUp.jsx";
import Footer from "./components/footer/Footer.jsx";
import men_banner from './assets/banner_mens.png'
import women_banner from './assets/banner_women.png'
import kids_banner from './assets/banner_kids.png'

const App = () => {
  return (
    <div>
        <BrowserRouter>
      <Navbar/>
            <Routes>
                <Route path='/' element={<Shop/>} />
                <Route path='/mens' element={<ShopCategory banner={men_banner} category={'men'}/>} />
                <Route path='/womens' element={<ShopCategory banner={women_banner} category={'women'}/>} />
                <Route path='/kids' element={<ShopCategory banner={kids_banner} category={'kid'}/>} />
                <Route path='/product' element={<Product/>}>
                    <Route path=':productId' element={<Product/>}/>
                </Route>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/login' element={<LoginSignUp/>}/>

            </Routes>
            <Footer/>
        </BrowserRouter>
    </div>
  )
}

export default App
