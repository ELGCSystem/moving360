// Importación de archivos para modificar el diseño de la página o para agregar funcionalidades

import React, { useState } from "react";
import { Nav, Footer } from "./components";
import { Routes, Route, Redirect, useMatch, useResolvedPath } from "react-router-dom";
import "./css/normalize.css";
import "./css/App.css";

// Implementción de páginas para viajar a lo largo de Moving360

import { 
  Inicio,
  Publicaciones,
  Publicar,
  RegistroInmobiliario,
  Membresias,
  Registrarse,
  SolicitudRegistro,
  TipoRegistro,
  GestionInmobiliaria,
  Login
} from "./views/index.js";

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
          <Route path="/membresias" exact element={<Membresias />} />
          <Route path="/tipo-registro" exact element={<TipoRegistro />} />
          <Route path="/solicitud-registro" exact element={<SolicitudRegistro />} />
          <Route path="/registro-inmobiliario/*" element={<RegistroInmobiliario />} />
          <Route path="/iniciar-sesion" exact element={<Login />} />
          <Route path="/alquilar-temporada" exact element={<Publicaciones />} />
          <Route path="/alquilar" exact element={<Publicaciones />} />
          <Route path="/comprar" exact element={<Publicaciones />} />
          <Route path="/publicar/*" element={<Publicar />} />
          <Route path="/gestion-inmobiliaria/*" element={<GestionInmobiliaria />} />
          <Route path="/registrarse" exact element={<Registrarse />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
