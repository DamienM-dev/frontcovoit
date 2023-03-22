import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Home from './Containers/Accueil/Accueil';
import Compte from './Containers/Compte/Compte';
import Contact from './Containers/Contact/Contact';
import ListeTrajets from './Containers/ListeTrajets/ListeTrajets';
import Trajet from './Containers/ListeTrajets/Trajet/Trajet';
import Publier from './Containers/Publier/Publier';
import RechercheTrajet from './Containers/RechercheTrajet/RechercheTrajet';
import Rerservation from './Containers/Rerservation/Rerservation';
import Reservation from './Containers/Rerservation/Rerservation';


function App() {
  return (
    <div className="App">
   <Layout>
      <Routes>
        <Route exact path="/"  Component={Home} />
        <Route exact path="/compte"  Component={Compte} />
        <Route exact path='/contact' Component={Contact} />
        <Route exact path="/listeTrajet"  Component={ListeTrajets} />
        <Route exact path='/trajet' Component={Trajet} />
        <Route exact path="/publier"  Component={Publier} />
        <Route exact path='/rechercheTrajet' Component={RechercheTrajet} />
        <Route exact path="/reservation"  Component={Reservation} />
      </Routes>
    </Layout>
    </div>
  );
}

export default App;
