import Ajustes from '../../../public/Img/engranaje.png';
import Button from '../Atom/Button';
import Input from '../Atom/Input';
import './Header.css';

function Header() {
    return ( 
        <>
            <article className='Header'>
                <div className='content-left'>
                    <h3>CampusLink</h3>
                    <Input placeholder="Buscar" type="text" width={45} height={50} />
                    <Button width={8} height={50} buttonColor="#C5C5C5" textColor="#000000" content="Inicio" />
                    <Button width={8} height={50} buttonColor="#C5C5C5" textColor="#000000" content="Grupos" />
                    <Button width={9} height={50} buttonColor="#C5C5C5" textColor="#000000" content="Articulos" />
                    <Button width={11} height={50} buttonColor="#C5C5C5" textColor="#000000" content="Comunicados" />
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