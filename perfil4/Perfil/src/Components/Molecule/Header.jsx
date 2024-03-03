import Input from '../Atom/Input'
import Button from '../Atom/Button'
import '../Molecule/Header.css'
import Ajustes from '../../../public/Img/engranaje.png';

function Header() {
    return ( 
        <>
            <article className='Header'>
                <div className='content-left'>
                    <h3>CampusLink</h3>
                    <Button width={8} height={50} buttonColor="#C5C5C5" textColor="#000000" content="Inicio" />
                </div>
                <div className='content-right'>
                <Button width={20} height={50} buttonColor="#C5C5C5" textColor="#000000" content="Mi perfil" />
                <button className='Button-Icon'><img className='Icon' src={Ajustes}></img></button>
                </div>
            </article>

        </>
     );
}

export default Header;