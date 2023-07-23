import { BrowserRouter, Routes, Route } from "react-router-dom"

import Layout from "./components/layout/Layout"
// import Home from "./components/pages/home/Home"
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer"
import ItemListContainer from "./components/pages/itemList/ItemListContainer"
import CheckoutContainer from "./components/pages/checkout/CheckoutContainer"
import CartContainer from "./components/pages/cart/CartContainer"
import LoginContainer from "./components/pages/login/LoginContainer"


function App() {

  return ( 
    < BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="/login" element={<LoginContainer />} />       
          <Route path="/productos/:id" element={<ItemDetailContainer />} />
          <Route path="/category/:categoryName" element={<ItemListContainer/> }/>
          <Route path="/checkout" element={<CheckoutContainer />} />
        </Route>

      <Route path="*" element={<h1>404 Not found</h1>} />

      </Routes>
    </BrowserRouter>
    )
}

export default App
