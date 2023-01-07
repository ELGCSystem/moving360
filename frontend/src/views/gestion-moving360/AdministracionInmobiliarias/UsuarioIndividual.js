import React from 'react';
import { Link } from 'react-router-dom';

const UsuarioIndividual = ({ usuario }) => {

  return (
    <div className="container-user">
      <div className="col-sm-6 offset-3">
        <ul className="list-group">
          <li className="list-group-item">{usuario.name}</li>
          <li className="list-group-item">{usuario.email}</li>
          <li className="list-group-item">{usuario.dni}</li>
          <li className="list-group-item">{usuario.tel}</li>
          <li className="list-group-item">{usuario.mobile}</li>
        </ul>
        <div className="buttons">
          <Link
            to={`EditarUsuario/${usuario._id}`}
            className="decoration"
          >
            <li className="success">Editar</li>
          </Link>
          <Link to={`EliminarUsuario/${usuario._id}`} className="decoration">
            <li className="delete">Eliminar</li>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UsuarioIndividual;
