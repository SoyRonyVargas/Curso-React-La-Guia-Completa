import Formulario from "./components/Formulario"
import Listado from "./components/Listado"
import Header from "./components/Header"

function App() {

  return (
    <div className="container mx-auto py-5 ">
      <Header />
      
      <div className="md:flex mt-10 md:px-10">
        <Formulario />
        <Listado />
      </div>
    </div>
  )
}

export default App
