import React, { useState } from "react";
import Header from "./components/Header";

import "./App.css";
import backgroundImage from "./assets/background.jpg";

function App() {
  const [projects, setProjects] = useState([
    "Desenvolvimento de app",
    "Front-end Web",
  ]);

  function handleAddProject() {
    setProjects([...projects, `Novo registro ${Date.now()}`]);

    console.log(projects);
  }

  return (
    <>
      <Header title="Aqui é meu titulo" />

      <img width="300" src={backgroundImage} alt="Background Image" />

      <ul>
        {projects.map((project, index) => (
          <li key={index}>{project}</li>
        ))}
      </ul>

      <button type="button" onClick={handleAddProject}>
        Adicionar projeto
      </button>
    </>
  );
}

export default App;
