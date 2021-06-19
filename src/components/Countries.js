import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

// comment on stock les données dans réact? via les hook de react.
    // data c'est là où on mettra nos données et setData c'est l'élément par lequel on passera pour actualiser nos données. 
    // on ne peut faire évoluer la var const [data,setData] qu'avec le paramètre setData
    // setData stock tout notre appel à la base données 
    // const [data,setData] = useState("hello");
    // pour aller chercher les données avec react on va faire appelle à la biblio axios dans la console npm i -s axios Axios nous permet de faire un fetch
    // then(res) =qu'est ce que tu contient? (le resulat).
    // On va mettre l'axio dans useEffect pour ameliorer les performances et que pour qu'il ne cherche pas les données en faisant les requêtes à  l'infini
    // const sayGoodBye = () =>{
    //     setData("Goodbye");
    // }

    // return (<div>
    //     {data}
    //     <button onClick={sayGoodBye}>Dire aurevoir</button>
    //     </div>
    // );

const Countries = () => {
    

    const [data,setData] = useState([]);

    // Pour trier les pays par ordre de population on va faire ça. Trier les données & l'input range
    const [sortedData, setSortedData] = useState([]);
    const [playOnce, setPlayOnce] = useState(true);
    // pour mettre un nombrede pays dynamique à l'écran on va se créer un range et surtout une valeur qui va être stocker
    const [rangeValue, setRangeValue] = useState(40);
    const [selectRadio, setSelectRadio] = useState('');
    const radios = ['Africa','America', 'Asia' ,'Europe' , 'Oceania'];

    useEffect(() => {
        if(playOnce){
        axios
        .get('https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag')
        
        .then((res) => {
            setData(res.data)
            setPlayOnce(false);
        });

       }
    const sortedCountry = () =>{
        // Ici on va transformer l'array data en Objet
        const countryObj = Object.keys(data).map((i) => data[i]);
        const sortedArray = countryObj.sort((a,b) =>{
            return b.population -a.population;
            // ici c'est un tri décroissant.
        });
        // console.log(sortedArray);
        sortedArray.length = rangeValue;
        setSortedData(sortedArray);
    };
    sortedCountry();
    
    },[data, rangeValue,playOnce]);
    // si on met data dans [] ça veut dire qu'à chaque fois data ou autre elt tu va faire  évoluer le UseEffect sera rejouer grâce au callBack [data]

    return (
        <div className="countries">
            <div className="sort-container">
                <input 
                type="range" 
                min="1" 
                max="250" 
                value={rangeValue}
                onChange={(e) => setRangeValue(e.target.value)}
                />
                <ul>
                    {radios.map((radio) =>{
                        return(
                            // ici on va mapper les elts en Js
                            <li key={radio}>
                                <input type="radio" value={radio} id="{radio}"
                                 checked={radio === selectRadio} onChange={(e) => setSelectRadio(e.target.value)} />
                                <label htmlFor={radio}>{radio}</label>
                            </li>
                        )
                    })}
                </ul>

            </div>
            <div className="cancel">
                {/* Si jammais selectRadio est sur true && tu inclus forcement tu affiche h5 */}
                {selectRadio && (
                <h5 onClick ={() =>setSelectRadio("")}>Annuler recherche</h5>
                )}
            </div >
            <ul className=" countries-list">
                {/* ici on va mettre sortedData au lieu de data pour avoir seulement les 30 pays */}
                {sortedData
                // ici tu va nous filtrer individuellement chaque country avec la méthode filter
                .filter((country) => country.region.includes
                (selectRadio))
                .map((country)=>(
                    // <li>{country.name}</li> 
                    // Pr chaque elt que tu map tu va appeler le composant Card.
                    <Card country={country} key={country.name}/>   
                ))}

            </ul>
        
        </div>
    );
};

export default Countries;