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
    const handleBloquearUsuario = (nombreUsuario) => {
        // Lógica para bloquear al usuario
        console.log(`Usuario bloqueado: ${nombreUsuario}`);
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
            <hr className="linea-corta" />
            <div className="grupo-usuario">
                <h3>Usuarios reportados</h3>
                <p>(0 Usuarios reportados)</p>
                <button className="boton-editar" onClick={() => handleEditarClick('Usuarios reportados')}>Editar</button>
            </div>
            <div className="grupo-usuario">
                <h3>Bloquear usuarios</h3>
                <p>(2 Usuarios Bloqueados)</p>
                <button className="boton-editar" onClick={() => handleEditarClick('Bloquear Usuarios')}>Editar</button>
            </div>
            <div className="grupo-usuario">
                <h3>Usuarios Eliminados</h3>
                <p>(2 Usuarios Eliminados)</p>
                <button className="boton-editar" onClick={() => handleEditarClick('Usuarios Eliminados')}>Editar</button>
            </div>
            <hr className="linea-corta" />
            <div className="titulo-seccion">
                <h2>Administración de Contenido</h2>
            </div>
            <hr className="linea-corta" />
            <div className="grupo-usuario">
                <h3>Publicaciones Reportadas</h3>
                <p>(4 publicaciones)</p>
                <button className="boton-editar" onClick={handleEditarClick}>Editar</button>
            </div>
            <div className="grupo-usuario">
                <h3>Publicaciones Bloqueadas</h3>
                <p>(4 publicaciones)</p>
                <button className="boton-editar" onClick={handleEditarClick}>Editar</button>
            </div>
            <div className="grupo-usuario">
                <h3>Publicaciones Eliminadas</h3>
                <p>(4 publicaciones)</p>
                <button className="boton-editar" onClick={handleEditarClick}>Editar</button>
            </div>
            <hr className="linea-corta" />
            <div className="grupo-usuario">
                <h3>Eventos Reportados</h3>
                <p>(2 eventos)</p>
                <button className="boton-editar" onClick={handleEditarClick}>Editar</button>
            </div>
            <div className="grupo-usuario">
                <h3>Eventos Bloqueados</h3>
                <p>(2 eventos)</p>
                <button className="boton-editar" onClick={handleEditarClick}>Editar</button>
            </div>
            <div className="grupo-usuario">
                <h3>Eventos Cancelados</h3>
                <p>(2 eventos)</p>
                <button className="boton-editar" onClick={handleEditarClick}>Editar</button>
            </div>
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
                            <li>Juan Pérez <button onClick={() => handleBloquearUsuario('Juan Pérez')}>Bloquear</button></li>
                            <li>Maria González <button onClick={() => handleBloquearUsuario('Maria González')}>Bloquear</button></li>
                            <li>Carlos Rodríguez <button onClick={() => handleBloquearUsuario('Carlos Rodríguez')}>Bloquear</button></li>
                            <li>Andrea López <button onClick={() => handleBloquearUsuario('Andrea López')}>Bloquear</button></li>
                        </ul>
                        <button onClick={handleCloseModal}>Cerrar</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ContenedorUsuarios;
