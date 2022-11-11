// Importación de archivos para modificar el diseño de la página o para agregar funcionalidades

import React, { useState } from "react";
import { Nav, Footer } from "./components";
import { Routes, Route, Redirect, useMatch, useResolvedPath } from "react-router-dom";
import "./css/normalize.css";
import "./css/App.css";

// Implementción de páginas para viajar a lo largo de Moving360

import { Inicio, Publicaciones, Publicar, Registrarse, Login } from "./views/index.js";

//Componente principal, contiene "Header", "Main" y "Footer"

const App = () => {

  


  return (
    <>
      <header>
        <Nav />
      </header>

      <main>
        <Routes>
          <Route path="/" exact element={<Inicio />} />
          <Route path="/iniciar-sesion" exact element={<Login />} />
          <Route path="/alquilar-temporada" exact element={<Publicaciones />} />
          <Route path="/alquilar" exact element={<Publicaciones />} />
          <Route path="/comprar" exact element={<Publicaciones />} />
          <Route path="/publicar/*" element={<Publicar />} />
          <Route path="/registrarse" exact element={<Registrarse />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
