import React from 'react';

const Card = (props) => {
    // console.log(props);
    // Ici on a fait du destructuring.{} signifie que l'on a remplacer props.country
    const {country} = props;
    
    const numberFormat = (x) =>{
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    return (
       <li className="card">
           <img src ={country.flag} alt="flag" />
           <div className="data-container">
               <ul>
                   <li>{country.name}</li>
                   <li>{country.capital}</li>
                   <li>Pop. {numberFormat(country.population)}</li>
               </ul>

           </div>
       </li>
    );
};

export default Card;