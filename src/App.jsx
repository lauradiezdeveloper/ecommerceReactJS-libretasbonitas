import { BrowserRouter, Routes, Route } from "react-router-dom"

import Layout from "./components/layout/Layout"
import CartContainer from "./components/pages/cart/CartContainer"
// import Home from "./components/pages/home/Home"
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer"
import ItemListContainer from "./components/pages/itemList/ItemListContainer"


function App() {

  return ( 
    < BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/productos/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={CartContainer} />
          <Route path="/category/:categoryName" element={<ItemListContainer/> }/>
        </Route>

      <Route path="*" element={<h1>404 Not found</h1>} />

      </Routes>
    </BrowserRouter>
    )
}

export default App
