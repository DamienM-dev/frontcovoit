import React from "react";
import { Link } from "react-router-dom";


import NavigationItem from "./NavigationItem/NavigationItem";



function Navigation() {
    return (
        
        <ul className="flex justify-around text-center items-end bg-primary text-secondary h-28">
            <NavigationItem>
                <img className="mx-auto w-9" src="/icone/camion.png" alt="logo camion"/>
                <Link exact to="/listeTrajet">Liste des Trajets</Link>
            </NavigationItem>
            <NavigationItem>
                <img className="mx-auto w-9" src="/icone/voiture.png" alt="logo voiture"/>
                <Link exact to="/rechercheTrajet">Rechercher un Trajet</Link>
            </NavigationItem>
            <NavigationItem>
                <img className="mx-auto w-9" src="/icone/liste.png" alt="logo liste"/>
                <Link to="/reservations">Vos trajets</Link>
            </NavigationItem>
            <NavigationItem to="/publier">
                <img className="mx-auto w-9" src="/icone/camion2.png" alt="logo camion2"/>
                <Link exact to="/publier">Publier un Trajet</Link>
            </NavigationItem>
            <NavigationItem to="/compte">
            <img className="mx-auto w-9" src="/icone/utilisateur.png" alt="logo utilisateur"/>
                <Link exact to="/compte">Mon compte</Link>
            </NavigationItem>
        </ul>     
    
     
    );
}

export default Navigation;