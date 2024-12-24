import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import  NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import Cart from './components/Cart'

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<ItemListContainer/>} />
      <Route path="/categoria/:categoria" element={<ItemListContainer/>} />
      <Route path="/item/:id" element={<ItemDetailContainer/>} />
      <Route path="/Carrito" element={<Cart/>} />
    </Routes>
  </BrowserRouter>
  )
}
export default App
