import React, {useState} from "react";
import BurgerStack from './BurgerStack'

const BurgerPane = (props) =>{
  
    return(
    <div style={{ border: '3px solid green', float:"right", width:'300px', height:"900px", marginTop:'-500px'}}> 
      <BurgerStack burger={props.burger}  clearBurger={props.clearBurger}/>
  
    
    <p>BurgerPane where we put BurgerStack</p>

    
    </div>
  
  
    )
}

export default BurgerPane
