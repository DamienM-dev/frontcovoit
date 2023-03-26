import React, { useState } from "react";
import { checkValidity } from "../../shared/utility";
import Input from "../../Components/UI/Input/input";

function Authentification() {
    const [inputs, setInputs] = useState({
        email: {
            elementType: 'input',
            elementConfig: {
                type: 'email',
                placeholder: 'Adresse e-mail'
            },
            value: '',
            label: 'Email',
            valid: false,
            validation: {
                required: true,
                email: true
            },
            touched: false,
            errorMessage: "l'email n'est pas valide"
        },
        password: {
            elementType: 'input',
            elementConfig: {
                type: 'password',
                placeholder: 'Le mot de passe est requie'
            },
            value: '',
            label: 'Mot de passe',
            valid: false,
            validation: {
                required: true,
            },
            touched: false,
            errorMessage: "Le mot de passe doit être renseigné"
        }
    });

    // toutes mes function
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

const registerClickHandler = () => {
  
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
        <div className="w-3/4 mt-10 mx-auto">

        <button className="text-lg w-32  p-3 rounded text-secondary bg-primary cursor-pointer" type="submit">
            Connexion
        </button>
        <button className="text-lg w-32  p-3 rounded text-secondary bg-primary cursor-pointer" type="submit">
            Inscription
        </button>
        </div>
    </form>
)

    return (
        <>
            <h1 className="text-center mt-7 mb-4 text-2xl">Authentification</h1>
            <main className="bg-green-100 w-96 mx-auto p-6 rounded-md">

            { form }
            </main>
        </>
    )
}

export default Authentification;
