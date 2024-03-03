import BotonesConfiguracion from '../Components/Molecule/BotonesConfiguracion';
import Botonescd from '../Components/Molecule/Botonescd';
import ContenedorEvento from '../Components/Molecule/ContenedorEvento';
import ContenedorMultimedia from '../Components/Molecule/ContenedorMultimedia';
import Header from '../Components/Molecule/Header';




function App() {
    return ( 
        <>
            <Header/>
            <ContenedorMultimedia />
            <ContenedorEvento />
            <BotonesConfiguracion />
            <Botonescd />
        </>
     );
}

export default App;