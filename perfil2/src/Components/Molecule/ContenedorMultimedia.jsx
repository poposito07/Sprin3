import React from 'react';
import perfil from '../../../public/Img/perfil.jpg'; // Importa la imagen de perfil
import './ContenedorMultimedia.css'; // Importa tu archivo de estilos CSS

function ContenedorMultimedia() {
    return (
        <div className="contenedor-principal">
            <div className="encabezado">
                <h2>Agregar contenido multimedia</h2>
            </div>
            <div className="contenido">
                <img src={perfil} alt="Imagen de perfil" className="imagen-perfil" />
                <div className="contenedor-blanco">
                    <p>Crear publicación</p>
                    <div className="botones">
                        <button className="boton-publico">Todo público</button>
                        <button className="boton-multimedia">Publicar contenido multimedia</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContenedorMultimedia;
