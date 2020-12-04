import React, {useState} from "react";
import Ingredients from './Ingredients'

const IngredientList = (props) =>{
    return (
    <div style={{border: '3px solid red', width:'30%'}}> 
        {props.name} 
        <button onClick={(e)=>{{props.addItem(e,newItem)}}} >Add to burgerstack</button>
        <Ingredients /> 
    </div>
    )}


export default IngredientList
