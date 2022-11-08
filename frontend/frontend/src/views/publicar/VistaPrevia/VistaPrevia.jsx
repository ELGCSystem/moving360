import React from 'react';
import { Button } from '../../../components/index.js';

const VistaPrevia = () => (
    <section>
        <div>
            <h2>Vista Previa</h2>
            <hr />
            <p>Así se verá tu aviso.</p>
            <div>Aviso</div>
            <div>
                <h3>Nombre cliente</h3>
            </div>
            <p>
                Luego de publicar, podes modificar tus datos de contacto entrando a "Mi Cuenta".
            </p>
        </div>

        <Button to="/publicar/contacto" onClick={window.scroll(0, 0)}>
            Atras
        </Button>
        <Button to="/">
            Publicar
        </Button>
    </section>
);

export default VistaPrevia;