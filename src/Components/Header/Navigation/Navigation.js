import React from "react";
import { Link } from "react-router-dom";

import NavigationItem from "./NavigationItem/NavigationItem";

function Navigation() {
    return (
        <ul className="flex justify-around items-end bg-primary text-secondary h-28">
            <NavigationItem>
                <Link to="/listeTrajet">Liste des Trajets</Link>
                </NavigationItem>
            <NavigationItem>
                <Link to="/rechercheTrajet">Rechercher un Trajet</Link>
            </NavigationItem>
            <NavigationItem>
                <Link to="/reservation">Vos trajets</Link>
            </NavigationItem>
            <NavigationItem to="/publier">
                <Link to="/publier">Publier un Trajet</Link>
            </NavigationItem>
            <NavigationItem to="/compte">
                <Link to="/compte">Mon compte</Link>
            </NavigationItem>
        </ul>     
     
    );
}

export default Navigation;