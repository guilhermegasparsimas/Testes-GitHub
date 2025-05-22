import { useState } from 'react'
import './App.css'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import LandingPage from './pages/LandingPage'

function App() {
  const[pagina, setPagina] = useState()

  return (
   <>
    <nav className='nav-root'>
    
      <label className='label-link' onClick={() => setPagina(<Login />)} >Login</label>
      <label className='label-link' onClick={() => setPagina(<Cadastro />)} >Cadastro</label>
      <label className='label-link' onClick={() => setPagina(<LandingPage />)} >LandingPage</label>
     
     
    </nav>
    <article>
      {pagina}
      
    </article>
   </>
  )
}

export default App
