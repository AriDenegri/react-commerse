import './App.css'
import  Button from "./components/Button"

function App() {
  return (
    <Button 
      color = 'red'
      texto = 'Soy un boton'
      callback = {() =>console.log("Me tocaron")}
    />
  )
}
export default App
