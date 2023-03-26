import React from "react";
import { NavLink } from "react-router-dom";
import classes from './NavigationItem.module.css';

function NavigationItem(props) {
  
    return (
        <li className="text-center">
            
            <NavLink exact={props.exact} to={props.to} activeclassname={classes.active}>{props.children}</NavLink>
        </li>
    );

}

export default NavigationItem;