import Homepage from "./Pages/Homepage"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./Pages/Login"
import CadastroDeUsuarios from "./Pages/CadastroDeUsuarios"
import EsqueciASenha from "./Pages/EsqueciASenha"

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Login" element={<Login />}/>
          <Route path="/CadastroDeUsuarios" element={<CadastroDeUsuarios />}/>
          <Route path="EsqueciASenha" element={<EsqueciASenha />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
