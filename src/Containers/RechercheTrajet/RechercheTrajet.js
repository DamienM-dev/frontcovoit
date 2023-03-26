import React, { useState } from "react";
import { checkValidity } from "../../shared/utility";


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
            label:'départ',
            valid: false,
            validation: {
                required: true,
                maxLength: 20
            }

        },
        arrivee: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'ville d\'arrivée'
            },
            value:'',
            label:'arrivée',
            valid: false,
            validation: {
                required: true,
                maxLength: 20
            }
        },
        date: {
            elementType: 'input',
            elementConfig: {
                type: 'date',
                placeholder: 'Date de départ'
            },
            value:'',
            label:'date',
            valid: false,
            validation: {
                required: true
            }
        },
        heure: {
            elementType: 'input',
            elementConfig: {
                type: 'time',
                placeholder: 'heure de départ'
            },
            value:'',
            label:'heure',
            valide: false,
            validation: {
                required: true
            }
        }
});

const [valid, setValid] = useState(false);

const inputChangeHandler = (event, id) => {
    const nouveauInput = {... inputs};
    nouveauInput[id].value = event.target.value;

    nouveauInput[id].valid = checkValidity(event.target.value, nouveauInput[id].validation);
    setInputs(nouveauInput);


    let formIsValid = true;
    for(let input in nouveauInput) {

        formIsValid = nouveauInput[input].valid && formIsValid;

    }

    setValid(formIsValid);
 }

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
                config={formElement.config}
                label={formElement.config.label}
                type={formElement.config.elementType}
                valid={formElement.config.valid}
                changerd={(e) => inputChangeHandler(e, formElement.id)} 
            />
        ))}
        <div className="flex justify-evenly w-3/4 mt-10 mx-auto">

        <input className="text-lg w-80 p-3 rounded text-secondary bg-primary cursor-pointer" 
                        type="submit" 
                        value="rechercher"
                        />
        <input className=" text-lg w-80 p-3 rounded text-secondary bg-primary cursor-pointer" type="submit" value="annuler" />
        </div>
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