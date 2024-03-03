import React from 'react';
import './ContenedorEvento.css'; // Importa tu archivo de estilos CSS

function ContenedorEvento() {
    return (
        <div className="contenedor-evento">
            <div className="encabezado">
                <h2>Crear evento</h2>
            </div>
            <div className="formulario">
                <div className="campo">
                    <label htmlFor="acerca-del-campo">Acerca del campo:</label>
                    <input type="text" id="acerca-del-campo" />
                </div>
                <div className="campo-grupo1">
                    <div className="campo">
                        <label htmlFor="fecha-inicio">Fecha de inicio:</label>
                        <input type="date" id="fecha-inicio" />
                    </div>
                    <div className="campo">
                        <label htmlFor="hora-inicio">Hora de inicio:</label>
                        <input type="time" id="hora-inicio" />
                    </div>
                </div>
                <div className="campo-grupo2">
                    <div className="campo">
                        <label htmlFor="fecha-fin">Fecha de fin:</label>
                        <input type="date" id="fecha-fin" />
                    </div>
                    <div className="campo">
                        <label htmlFor="hora-fin">Hora de fin:</label>
                        <input type="time" id="hora-fin" />
                    </div>
                </div>
                <div className="campo">
                    <label htmlFor="enlace-externo">Enlace externo al evento:</label>
                    <input type="text" id="enlace-externo" />
                </div>
                <div className="campo">
                    <label htmlFor="ponentes">Ponentes:</label>
                    <input type="text" id="ponentes" />
                </div>
                <div className="boton-publicar">
                    <button>Publicar evento</button>
                </div>
            </div>
        </div>
    );
}

export default ContenedorEvento;
