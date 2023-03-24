import React, { useState } from "react";


import Input from '../../Components/UI/Input/input';


function RechercheTrajet() {

    const [inputs, setInputs] = useState({

        depart: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'ville de départ'
            },
            value:'',
            label:'départ'

        },
        arrivee: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'ville d\'arrivée'
            },
            value:'',
            label:'arrivée'
        },
        date: {
            elementType: 'input',
            elementConfig: {
                type: 'date',
                placeholder: 'Date de départ'
            },
            value:'',
            label:'date'
        },
        heure: {
            elementType: 'input',
            elementConfig: {
                type: 'time',
                placeholder: 'heure de départ'
            },
            value:'',
            label:'heure'
        }
});

const formElementsArray = [];

for(let key in inputs) {
    formElementsArray.push({
        id: key,
        config: inputs[key]
    });
}

let form = (
    <form>
        {formElementsArray.map(formElement => (
            <Input
                key={formElement.id}
                config={formElement.config.value}
                label={formElement.config.label}
                type={formElement.config.elementType} 
            />
        ))}
        <input type="submit" value="rechercher" />
        <input type="submit" value="annuler" />
    </form>
)
    return (
        <>
        <h1 className="text-center mt-7 mb-4 text-2xl">Recherche un Trajet</h1>
        {form}
        
        </>
    )
}

export default RechercheTrajet;