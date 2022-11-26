import { Textarea } from "../../../../components";

const InformacionAdicional = () => (
    <section className="informacion-adicional">
        <h2>Información adicional</h2>
        <Textarea
            displayName="Descripción"
            name="descripcion"
        />
        <Textarea
            displayName="Notas (no se publican en internet)"
            name="notas"
        />
    </section>
);

export default InformacionAdicional;