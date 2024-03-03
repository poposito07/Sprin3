import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './NuevoContenedor.css'; // Importa tu archivo de estilos CSS

function NuevoContenedor() {
    return (
        <div className="contenedor">
            <h2>CampusLink</h2>
            <p>Completa tu perfil</p>
            <p>Personaliza tu experiencia</p>
            <div className="campo">
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" id="nombre" />
            </div>
            <div className="campo">
                <label htmlFor="correo">Correo Electrónico:</label>
                <input type="email" id="correo" />
            </div>
            <div className="campo">
                <label htmlFor="id-estudiante">ID de Estudiante:</label>
                <input type="text" id="id-estudiante" />
            </div>
            <div className="campo">
                <label htmlFor="telefono">Teléfono:</label>
                <input type="tel" id="telefono" />
            </div>
            <div className="campo">
                <label htmlFor="intereses">Intereses:</label>
                <div className="input-boton">
                    <input type="text" id="intereses" />
                    <div className="botones-intereses">
                        <button>Materia</button>
                        <button>Deportes</button>
                        <button>Comida</button>
                        <button>Hobbies</button>
                        <button>Películas y Series</button>
                    </div>
                </div>
            </div>
            <div className="campo">
                <label htmlFor="instagram">Instagram:</label>
                <div className="redes-sociales">
                    <FontAwesomeIcon icon={faInstagram} className="icono-red-social" />
                    <input type="text" id="instagram" />
                </div>
            </div>
            <div className="campo">
                <label htmlFor="facebook">Facebook:</label>
                <div className="redes-sociales">
                    <FontAwesomeIcon icon={faFacebook} className="icono-red-social" />
                    <input type="text" id="facebook" />
                </div>
            </div>
            <div className="campo">
                <label htmlFor="twitter">Twitter:</label>
                <div className="redes-sociales">
                    <FontAwesomeIcon icon={faTwitter} className="icono-red-social" />
                    <input type="text" id="twitter" />
                </div>
            </div>
            <div className="campo">
                <label htmlFor="acerca-de-mi">Acerca de mí:</label>
                <input type="text" id="acerca-de-mi" />
            </div>
            <div className="campo">
                <div className="linea"></div>
            </div>
            <div className="campo">
                <div className="contenedor-imagen">
                    <img src="ruta/imagen-perfil.jpg" alt="Imagen de perfil" className="imagen-perfil" />
                    <input type="file" id="seleccionar-archivo" />
                    <button>Deseleccionar archivo</button>
                </div>
            </div>
            <div className="campo">
                <label htmlFor="calle">Calle:</label>
                <input type="text" id="calle" />
                <label htmlFor="no-int">No. int:</label>
                <input type="text" id="no-int" />
            </div>
            <div className="campo">
                <label htmlFor="colonia">Colonia:</label>
                <input type="text" id="colonia" />
                <label htmlFor="cp">CP:</label>
                <input type="text" id="cp" />
            </div>
            <div className="campo">
                <label htmlFor="estado">Estado:</label>
                <input type="text" id="estado" />
                <label htmlFor="pais">País:</label>
                <input type="text" id="pais" />
            </div>
            <div className="campo">
                <div className="linea"></div>
            </div>
            <div className="campo">
                <button className="boton-guardar">Guardar cambios</button>
            </div>
        </div>
    );
}

export default NuevoContenedor;
