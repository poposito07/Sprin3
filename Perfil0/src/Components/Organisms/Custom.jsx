import React from 'react';
import '../Organisms/Custom.css';

function Custom() {
    // Array de objetos con la información para cada componente
    const datos = [
        {
            nombre: "Roanna bosem",
            tiempo: "4 horas",
            imagenPerfil: '../../../public/Img/perfil.jpg',
            imagenFondo: '../../../public/Img/Fondo.png',
            meGusta: "Me gusta",
            comentarios: "2 comentarios",
            compartir: "0 compartir"
        },
         {
            nombre: "Roanna bosem",
            tiempo: "4 horas",
            imagenPerfil: '../../../public/Img/perfil.jpg',
            imagenFondo: '../../../public/Img/Fondo.png',
            meGusta: "Me gusta",
            comentarios: "2 comentarios",
            compartir: "0 compartir"
        },
        {
            nombre: "Roanna bosem",
            tiempo: "4 horas",
            imagenPerfil: '../../../public/Img/perfil.jpg',
            imagenFondo: '../../../public/Img/Fondo.png',
            meGusta: "Me gusta",
            comentarios: "2 comentarios",
            compartir: "0 compartir"
        },
        {
            nombre: "Roanna bosem",
            tiempo: "4 horas",
            imagenPerfil: '../../../public/Img/perfil.jpg',
            imagenFondo: '../../../public/Img/Fondo.png',
            meGusta: "Me gusta",
            comentarios: "2 comentarios",
            compartir: "0 compartir"
        }
        // Agrega más objetos aquí con diferentes datos según sea necesario
    ];

    return (
        <>
            {datos.map((dato, index) => (
                <div key={index} className="contenedor-personalizado">
                    <img src={dato.imagenPerfil} alt="imagen" className="imagen-esquina" />
                    <div className="contenedor-publicacion-personalizado">
                        <div className="texto-contenedor">
                            <div className="texto-alado">{dato.nombre}</div>
                            <div className="texto-alado">{dato.tiempo}</div>
                        </div>
                        <div className="contenedor-imagen-pequena-personalizado">
                            <img src={dato.imagenFondo} alt="imagen" className="imagen-fondo" />
                        </div>
                        <div className="texto-pequeno-personalizado">{dato.meGusta}</div>
                        <div className="texto-pequeno-personalizado">{dato.comentarios}</div>
                        <div className="texto-pequeno-personalizado">{dato.compartir}</div>
                    </div>
                    <div className="borde-final">
                        <span className="texto-borde">Me gusta</span>
                        <span className="texto-borde">Comentar</span>
                        <span className="texto-borde">Compartir</span>
                    </div>
                </div>
            ))}
        </>
    );
}

export default Custom;
