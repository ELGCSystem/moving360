import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UsuarioIndividual from './UsuarioIndividual.js';
import './AdministracionInmobiliarias.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
  

const AdministracionInmobiliarias = () => {
  const [dataUsuarios, setDatausuarios] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:4000/api/admin/getAll')
      .then((res) => {
        console.log(res.data);
        setDatausuarios(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  const listaUsuarios = dataUsuarios.map((usuario) => {
    return (
      <div>
        <UsuarioIndividual usuario={usuario} />
      </div>
    );
  });

  return (
    <div className="container">
      <h2 className="title">Lista de Usuarios</h2>
      <div className="usuarios">{listaUsuarios}</div>
    </div>
  );
};

export default AdministracionInmobiliarias;
