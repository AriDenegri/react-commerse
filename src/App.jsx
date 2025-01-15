import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import  NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import Cart from './components/Cart'
import Checkout from './components/Checkout'

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<ItemListContainer/>} />
      <Route path="/categoria/:categoria" element={<ItemListContainer/>} />
      <Route path="/item/:id" element={<ItemDetailContainer/>} />
      <Route path="/Carrito" element={<Cart/>} />
      <Route path="/Checkout" element={<Checkout/>} />
    </Routes>
  </BrowserRouter>
  )
}
export default App
