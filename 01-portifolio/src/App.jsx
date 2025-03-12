import { useState } from "react";
import "./App.css";
import Perfil from "./components/perfil/Perfil";
import foto from "./img/perfil.jpg";
import projeto1 from "./img/Captura de tela_12-3-2025_15177_www.figma.com.jpeg";
import projeto2 from "./img/Captura de tela_12-3-2025_15166_www.figma.com.jpeg";
import projeto3 from "./img/Captura de tela_12-3-2025_151639_www.figma.com.jpeg";
import logolinkedin from "./assets/logo-linkedin 1.svg";
import logo from "./assets/logo-whatsapp.svg";
import logo2 from "./assets/logo-github 1.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="background">
      <div>
        <Perfil fotoPerfil={foto}>
          <p>@limazxzn</p>
          <h3>Olá meu nome é Pedro</h3>
          <p>Estudante de Análise e Desenvolvimento de Sistemas</p>
          <h1>Sobre Mim</h1>
          <p>
            Nascido e criado em jau eu sou o Pedro um Desenvolvedor Front-end e
            Back-end nascido em 17 de Março de 2008. Planejo cursar
            Desenvolvimento de sistemas no futuro e me especializar em React,
            Python, C# e outras linguagens do tipo.
          </p>
          <h2>E esses são meus projetos</h2>
        </Perfil>
        <h1>Projeto 1: DEVFLIX</h1>
        <img src={projeto2} alt="" />
        <h1>Projeto 2: ProtMind</h1>
        <img src={projeto3} alt="" />
        <h1>Projeto 3: DoeJá</h1>
        <img src={projeto1} alt="" />
        <footer>
          <p>
            <a
              href="https://www.linkedin.com/in/pedro-silva-de-lima-083562313/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={logolinkedin}
                alt="LinkedIn"
                style={{ width: "30px", marginLeft: "5px" }}
              />
            </a>
            <a
              href="https://wa.link/ifj9ox/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={logo}
                alt="WhatsApp"
                style={{ width: "30px", marginLeft: "5px" }}
              />
            </a>
            <a
              href="https://github.com/Limazxz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={logo2}
                alt="GitHub"
                style={{ width: "30px", marginLeft: "5px" }}
              />
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
