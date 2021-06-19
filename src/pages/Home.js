import Countries from "../components/Countries";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const Home = () =>{
    return(
        <div className="home">
            
            <Navigation />
            <Logo/>
            <h1>Acceuil</h1>
            <Countries/>
            
        </div>
    )
}
export default Home;

// Dans cette fonction on a un composant qui s'appelle Acceuil
// Chaque composant dans React doit avoir une balise supérieur div. ça peut être aussi un fragment <>...<>
// return c'est ce que va nous renvoyer notre composant.
