import React, { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Routes, Route, Navigate } from "react-router-dom";
import PanelControl from './PanelControl/PanelControl.jsx';
import AdministracionInmobiliarias from './AdministracionInmobiliarias/AdministracionInmobiliarias.jsx'
import AdministracionAbonos from './AdministracionBonos/AdministracionAbonos.jsx'
import AdministracionUsuarios from './AdministracionUsuarios/AdministracionUsuarios.jsx'
import SolicitudClientes from './SolicitudClientes/SolicitudClientes.jsx'
import Turnos from './Turnos/Turnos.jsx';
import Servicios from './Servicios/Servicios.jsx';
import { funcionesSideBar } from "./Funciones.js";
import { NavLink } from '../../components/index.js';
import './GestionMoving360.css';

const GestionInmobiliaria = () => {
    useEffect(() => {
        document.title = "Gestión Moving360 - Moving360"
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
                <Route path="administracion-inmobiliarias" exact element={<AdministracionInmobiliarias />} />
                <Route path="administracion-abonos" exact element={<AdministracionAbonos />} />
                <Route path="administracion-usuarios" exact element={<AdministracionUsuarios />} />
                <Route path="solicitud-clientes" exact element={<SolicitudClientes />} />
                <Route path="Turnos" exact element={<Turnos />} />
                <Route path="servicios" exact element={<Servicios />} />
            </Routes>
        </div>
    );
}

export default GestionInmobiliaria;