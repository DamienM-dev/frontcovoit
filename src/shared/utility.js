import React, { useState } from "react";



export const checkValidity = (value, rules) => {
    let isValid = true;

    if(rules.required) {

        isValid = value.trim() !== '' && isValid;
    }
    
    if(rules.maxLength) {
   

       isValid = value.length <= rules.maxLength && isValid;
        
    }

    if(rules.email) {
        
        const pattern  = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        isValid = pattern.test(value) && isValid;

    }

    return isValid;

}
