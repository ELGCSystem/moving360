import { Select, Input } from "../../../../components";
import {
    partidosZonaNorte,
    partidosZonaOeste,
    partidosZonaSur,
    deportes,
    amenities
} from "./DatosCountry";
import "./DatosCountry.css";

const DatosCountry = () => (
    <section className="datos-country">
        <h2>Datos del country / Barrio cerrado</h2>

        <Select displayName="Nombre *" name="nombre"> 
        </Select>

        <Select displayName="Zona *" name="zona"> 
        </Select>

        <Select displayName="Partido *" name="partido"> 
        </Select>
        
        <Select displayName="Urbanización *" name="urbanizacion"> 
        </Select>

        <h3>Deportes</h3>

        {
            deportes.map((deporte) => (
                <Input
                    key={deporte.id}
                    displayName={deporte.name}
                    name={deporte.name.toLowerCase()}
                    type="checkbox"
                />
            ))
        }

        <h3>Amenities</h3>

        {
            amenities.map((amenity) => (
                <Input
                    key={amenity.id}
                    displayName={amenity.name}
                    name={amenity.name.toLowerCase().replaceAll(" ", "-")}
                    type="checkbox"
                />
            ))
        }

    </section>
);

export default DatosCountry;