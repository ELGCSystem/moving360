import React, { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Routes, Route, Navigate } from "react-router-dom";
import PanelControl from './PanelControl/PanelControl.jsx';
import NuevaPublicacion from './NuevaPublicacion/NuevaPublicacion.jsx';
import MisPublicaciones from './MisPublicaciones/MisPublicaciones.jsx';
import Mensajes from './Mensajes/Mensajes.jsx';
import Servicios from './Servicios/Servicios.jsx';
import Estadisticas from "./Estadisticas/Estadisticas.jsx";
import GestionCuentas from "./GestionCuentas/GestionCuentas.jsx";
import { funcionesSideBar } from "./Funciones.js";
import { NavLink } from '../../components/index.js';
import './GestionInmobiliaria.css';

const GestionInmobiliaria = () => {
    useEffect(() => {
        document.title = "Gestión Inmobiliaria - Moving360"
    }, []);

    return (
        <div className="gestion-inmobiliaria">
            <nav className="sidebar">
                <ul className="sidebar__list">
                    {
                        funcionesSideBar.map((link) => (
                            <NavLink to={link.url} className="sidebar">
                                <FontAwesomeIcon icon={link.icon} /> {link.title}
                            </NavLink>
                        ))
                    }
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<Navigate to='panel-control' />} />
                <Route path="panel-control" exact element={<PanelControl />} />
                <Route path="nueva-publicacion" exact element={<NuevaPublicacion />} />
                <Route path="mis-publicaciones" exact element={<MisPublicaciones />} />
                <Route path="estadisticas" exact element={<Estadisticas />} />
                <Route path="mensajes" exact element={<Mensajes />} />
                <Route path="gestion-cuentas" exact element={<GestionCuentas />} />
                <Route path="servicios" exact element={<Servicios />} />
            </Routes>
        </div>
    );
}

export default GestionInmobiliaria;