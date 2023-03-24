import React from "react";

function input(props) {

    // let inputElement;

    // switch(props.type) {
    //     case('input'):
    //         inputElement = <input { ...props.config } value = { props.value }/>;
    //         break;
    // }

    return (
        <div className="text-center">
            <label className="block uppercase text-fourth font-bold pr-4">{props.label}</label>
            <input className="bg-thirdary appearance-none border-2 border-gray-200 w-3/4 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-fourth" id="inline-full-name" type="text" value={props.value} />
        </div>
    )
}

export default input;