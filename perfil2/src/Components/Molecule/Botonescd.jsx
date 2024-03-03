import React from 'react';
import './Botonescd.css'; // Importa tu archivo de estilos CSS

function Botonescd() {
    return (
        <div className="contenedor-botones-cd">
        <div className="texto-cd">
            <h2>Menu de perfil</h2>
        </div>
        <div className="botones-cd">
        <button className="btn-reportar-contenido">Reportar contenido</button>
<button className="btn-reportar-usuario">Reportar usuario</button>
<button className="btn-bloquear-contenido">Bloquear contenido</button>
<button className="btn-bloquear-usuario">Bloquear usuario</button>

        </div>
    </div>
    
    );
}

export default Botonescd;
