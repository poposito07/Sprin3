import React, { useState } from 'react';
import './ContenedorUsuarios.css'; // Importa tu archivo de estilos CSS

function ContenedorUsuarios() {
    const [mostrarModal, setMostrarModal] = useState(false);
    const [tipoUsuario, setTipoUsuario] = useState('');

    const handleEditarClick = (tipo) => {
        setTipoUsuario(tipo);
        setMostrarModal(true);
    };

    const handleCloseModal = () => {
        setMostrarModal(false);
    };

    return (
        <div className="contenedor-usuarios">
            <div className="titulo-seccion">
                <h2>CampusLink</h2>
                <p>Administra usuarios</p>
                <h2>Administración de Usuarios</h2>
            </div>
            <hr className="linea-corta" />
            <div className="grupo-usuario">
                <h3>Administradores</h3>
                <p>(4 administradores)</p>
                <button className="boton-editar" onClick={() => handleEditarClick('Administradores')}>Editar</button>
            </div>
            <div className="grupo-usuario">
                <h3>Directores</h3>
                <p>(2 directores)</p>
                <button className="boton-editar" onClick={() => handleEditarClick('Directores')}>Editar</button>
            </div>
            {/* Otros grupos de usuarios */}
            <hr className="linea-corta" />
            {mostrarModal && (
                <div className="modal">
                    <div className="modal-contenido">
                        <h3>Lista de {tipoUsuario}</h3>
                        <div className="barra-busqueda">
                            <input type="text" placeholder="Buscar usuario" />
                            <button className="boton-agregar">Agregar</button>
                        </div>
                        <ul className="lista-personas">
                            <li>Juan Pérez</li>
                            <li>Maria González</li>
                            <li>Carlos Rodríguez</li>
                            <li>Andrea López</li>
                        </ul>
                        <button onClick={handleCloseModal}>Cerrar</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ContenedorUsuarios;
