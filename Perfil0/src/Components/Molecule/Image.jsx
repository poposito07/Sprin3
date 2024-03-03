import '../Molecule/Image.css'; // Asegúrate de importar tu archivo CSS
import Perfil from '../../../public/Img/perfil.jpg'
import PerfilFondo from '../../../public/Img/perfil2.jpg'


const App = () => {
    return (
        <div className="image-container">
            <img src={PerfilFondo} alt="background" className="background-image" />
            <img  src={Perfil} alt="overlay" className="overlay-image" />
        </div>
    );
};

export default App;