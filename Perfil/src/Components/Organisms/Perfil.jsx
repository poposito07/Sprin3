import '../Organisms/Perfil.css'
import Image from '../Molecule/Image'
import Images from '../../../public/Img/perfil.jpg'
import Codigo from '../../../public/Img/codigo.png'


import Header from '../Molecule/Header'

function Perfil() {
    return ( 
        <>
            <Header/>
            <section className='body'>
                <div className='body-left'>
                <div className='container-left'>
                    <div className='container-pefil'>
                    <Image/>
                    </div>
                    <div className='container-info'>
                        <div className='info-left'>
                        <h2 className='text'>Joanna Rosenbaum</h2>
                        <h5 className='text'>Ing. Sistemas de la información</h5>
                        <h6 className='text'>Chiapas, México</h6>
                        <article className='container-redes'>
                            <ul>
                                <li>@JoannaRose</li>
                                <li>/JoannaRose</li>
                                <li>@JoannaRose</li>
                            </ul>
                        </article>
                        </div>
                        <div className='container-intereses'>
                            <h4 className='text2'>Intereses</h4>
                            <ul className='container-Lista'>
                                <li className='Lista'>Materias</li>
                                <li className='Lista'>Deportes</li>
                                <li className='Lista'>Comida</li>
                                <li className='Lista'>Hobbies</li>
                                <li className='Lista'>Peliculas/series</li>
                            </ul>
                        </div>
                    </div>
                    <section className='section-info'>
                        <div className='Acerca-de-mi'>
                            <h2>Acerca de mí</h2>
                            <p>Figma ipsum component variant main layer. Reesizing undo figjam align inspect. Ipsum layer stroke slice frame italic background. Bold boolean duplicate layout overflow. Scale draft ipsum main background figma selection. Star ellipse comment figma content draft. Figma main main arrange strikethrough. List slice pixel ellipse figjam text. Arrow line variant boolean device star hand comment layer. Device shadow pixel comment scale figjam bold library font group. Arrow style slice reesizing underline prototype. Comment move underline arrange style slice move reesizing pixel.</p>
                        </div>
                        <div className='Amigos'>
                        <div className='info-amigos'>
                            <h4 className='margin0'>Amigos</h4>
                            <h6 className='margin1'>123 amigos <a href='#'>Buscar amigos</a></h6>
                        </div>
                            <div className='container-amigos'>
                                <img className='image' src={Images} />
                                <div className='text-amigos'>
                                    <h4 className='margin0'>Joan Rosenbaum</h4>
                                    <h6 className='margin0'>Ing. Sistemas computacionales</h6>
                                </div>
                            </div>
                            <div className='container-amigos'>
                                <img className='image' src={Images} />
                                <div className='text-amigos'>
                                    <h4 className='margin0'>Joan Rosenbaum</h4>
                                    <h6 className='margin0'>Ing. Sistemas computacionales</h6>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                </div>
                <div className='body-right'>
                    <section className='container'>
                        <h4 className='margin0'>Tus Articulos</h4>
                        <h6>Figma ipsum component variant main layer. Boolean frame scale horizontal vertical component team link.</h6>
                        <div className='card'>
                            <img src={Codigo} alt="Fondo" className='background-image'/>
                            <div className='content'>
                                <h2>Cary Johns</h2>
                                <p>Figma ipsum component variant main layer...</p>
                                <button>Saber más</button>
                            </div>
                        </div>
                        <div className='card'>
                            <img src={Codigo} alt="Fondo" className='background-image'/>
                            <div className='content'>
                                <h2>Cary Johns</h2>
                                <p>Figma ipsum component variant main layer...</p>
                                <button>Saber más</button>
                            </div>
                        </div>
                        <div className='card'>
                            <img src={Codigo} alt="Fondo" className='background-image'/>
                            <div className='content'>
                                <h2>Cary Johns</h2>
                                <p>Figma ipsum component variant main layer...</p>
                                <button>Saber más</button>
                            </div>
                        </div>
                    </section>
                    
                </div>
            </section>
        </>
     );
}

export default Perfil;