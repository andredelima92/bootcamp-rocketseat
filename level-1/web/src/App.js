import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import api from "./services/api";

import "./App.css";

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get("projects").then(({ data }) => {
      setProjects(data);
    });
  }, []);

  async function handleAddProject() {
    const { data } = await api.post("projects", {
      title: "Projeto manda chuva",
      owner: "Andre Lima",
    });

    setProjects([...projects, data]);
    console.log(data);
  }

  return (
    <>
      <Header title="Aqui é meu titulo" />

      <ul>
        {projects.map((project, index) => (
          <li key={index}>{project?.title}</li>
        ))}
      </ul>

      <button type="button" onClick={handleAddProject}>
        Adicionar projeto
      </button>
    </>
  );
}

export default App;
