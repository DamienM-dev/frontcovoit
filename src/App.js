import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Home from './Containers/Accueil/Accueil';
import Compte from './Containers/Compte/Compte';
import Contact from './Containers/Contact/Contact';
import ListeTrajets from './Containers/ListeTrajets/ListeTrajets';
import Publier from './Containers/Publier/Publier';
import RechercheTrajet from './Containers/RechercheTrajet/RechercheTrajet';
import Reservations from './Containers/Reservations/Reservations';
import Reservation from './Containers/Reservations/Reservation/Reservation';
import ErrorPage from './Components/ErrorPage';
import Authentification from './Containers/Authentification/Authentification';



function App() {
  return (
    <div className="App">
   <Layout>
      <Routes>
        <Route exact path="/"  Component={Home} />
        <Route exact path="/authentification" Component={Authentification} />
        <Route exact path="/compte"  Component={Compte} />
        <Route exact path='/contact' Component={Contact} />
        <Route exact path="/listeTrajet"  Component={ListeTrajets} />
        <Route exact path="/publier"  Component={Publier} />
        <Route exact path='/rechercheTrajet' Component={RechercheTrajet} />
        <Route exact path="/reservations"  Component={Reservations} />
        <Route exact path="/reservations/reservation/:id" Component={Reservation} />
        <Route path="*" Component={ErrorPage} />
      </Routes>
    </Layout>
    </div>
  );
}

export default App;
