import './App.css'
import  NavBar from "./components/NavBar"
import ItemList from "./components/ItemList"

function App() {
  return (
   <>
    <NavBar
      titulo = "CarLink"
      categoria1 = "Rapidez"
      categoria2 = "Cargamento"
      categoria3 = "Económico"
      categoria4 = "Comodidad"
      numeroCarrito = {1}
      />
    <ItemList 
      contenido = "Lista de vehiculos, proximamente aqui..."
    />
  </>
  )
}
export default App
