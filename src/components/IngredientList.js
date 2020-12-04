import React, {useState} from "react";
import Ingredients from './Ingredients'

// const IngredientList = (props) =>{
//     return (
//       <div style={{border: '3px solid red', width:'30%'}}>
//       {props.items.map((item, index)=>(
//       <Ingredients />
//   ))}
//     </div>
//     )}

const IngredientList = (props) =>{
  return (
      <div style={{border: '3px solid red', width:'30%'}}> 
         <Ingredients items={props.items} addItem={props.addItem} />
     </div>
  )}
export default IngredientList


