import './App.css'
import  NavBar from "./components/NavBar"
import ItemList from "./components/ItemList"

function App() {
  return (
   <>
    <NavBar
      titulo = "Titulo Principal"
      categoria1 = "Elemento 1 "
      categoria2 = "Elemento 2"
      categoria3 = "Elemento 3"
      categoria4 = "Elemento 4"
      numeroCarrito = {1}
      />
    <ItemList 
      contenido = "Lista de productos, proximamente aqui..."
    />
  </>
  )
}
export default App
