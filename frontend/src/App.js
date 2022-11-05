// Importación de archivos para modificar el diseño de la página o para agregar funcionalidades

import React from "react";
import "./css/normalize.css";
import "./css/App.css";
import NavBar from "./components/NavBar/js/NavBar.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Footer from "./components/Footer/js/Footer.js";

// Implementción de páginas para viajar a lo largo de Moving360

import Inicio from "./views/inicio/Inicio.js";
import Register from "./views/registrarse/js/Register.js";
import Publicaciones from "./views/publicaciones/Publicaciones.js";
import Publicar from "./views/publicar-gratis/Publicar.js";

//Componente principal, contiene "Nav" y "Footer"

function App() {

  return (
    <>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" exact element={<Inicio />} />
            <Route path="/inicio" exact element={<Inicio />} />
            <Route path="/vender" exact element={<Publicaciones />} />
            <Route path="/alquilar" exact element={<Publicaciones />} />
            <Route path="/comprar" exact element={<Publicaciones />} />
            <Route path="/publica-gratis" exact element={<Publicar />} />
            <Route path="/Register" exact element={<Register />} />
          </Routes>
        </Router>
        <Footer />
    </>
  );
}

export default App;
