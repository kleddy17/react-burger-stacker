import React, {useState} from "react";
import Ingredients from './Ingredients'

const IngredientList = (props) =>{

  // const addToBurger
    return (
        <div> 
            {props.name} {props.color} {props.itemIndex}
            <Ingredients /> 
       </div>
    )}


export default IngredientList
