import Codigo from '../../../public/Img/codigo.png';
import Image from '../Molecule/Image';
import '../Organisms/Perfil.css';


import Header from '../Molecule/Header';

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
                        </div>
                        <div className='container-intereses'>
                            <h4 className='text2'>Intereses</h4>
                            <ul className='container-Lista'>
                                <li className='Lista'>Materias</li>
                                <li className='Lista'>Deportes</li>
                                
                            </ul>
                        </div>
                    </div>
                    
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