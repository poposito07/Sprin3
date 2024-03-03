import React from 'react';
import Perfil from '../../../public/Img/perfil.jpg';
import '../Organisms/CustomComponent.css';

function CustomComponent() {
    return (
        <div className="contenedor-boton">
            <div className="contenedor-imagen">
                <img src={Perfil} alt="perfil" className="imagen-perfil" />
            </div>
            <div className="contenedor-busqueda">
                <input type="text" placeholder="Buscar..." className="barra-busqueda" />
            </div>
            <div className="contenedor-botones">
                <button className="boton-gris">Contenido multimedia</button>
                <button className="boton-gris">Evento</button>
                <button className="boton-gris">Escribir artículo</button>
            </div>
            <div className="informacion">
                {/* Aquí irá tu información */}
            </div>
        </div>
    );
}

export default CustomComponent;
