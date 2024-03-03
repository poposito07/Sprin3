import React from 'react';
import './BotonesConfiguracion.css'; // Importa tu archivo de estilos CSS

function BotonesConfiguracion() {
    return (
        <div className="contenedor-botones-configuracion">
            <div className="texto-configuracion">
                <h2>Menu de perfil</h2>
            </div>
            <div className="botones-configuracion">
                <button>Configuración</button>
                <br></br>
                <button>Cerrar sesión</button>
            </div>
        </div>
    );
}

export default BotonesConfiguracion;
