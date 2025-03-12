import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Perfil from './components/perfil/Perfil'
import foto from "./img/perfil.jpg"
import projeto1 from "./img/Captura de tela_12-3-2025_15177_www.figma.com.jpeg"
import projeto2 from "./img/Captura de tela_12-3-2025_15166_www.figma.com.jpeg"
import projeto3 from "./img/Captura de tela_12-3-2025_151639_www.figma.com.jpeg"
import fundo from "./img/wpa.jpg"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="background">
      <div>
        <Perfil fotoPerfil={foto}>
          <p>@limazxzn</p>
          <h3>Olá meu nome é Pedro</h3>
          <p>Estudante de Análise e Desenvolvimento de Sistemas</p>
          <p>Desenvolvedor Front-end e esse são meus projetos</p>
        </Perfil>
        <img src={projeto2} alt="" />
        <img src={projeto3} alt="" />
        <img src={projeto1} alt="" />
      </div>
    </div>
  )
}

export default App