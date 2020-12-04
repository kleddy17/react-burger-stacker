import React, {useState} from "react";
import BurgerPane from './BurgerPane'
const BurgerStack= (props) => {
    return (
        <div>
            <ul>
                {/* //each item an index */}
                {props.burger.map((item, index)=>
                {
                    return(
                        <li key={index} style= {{ backgroundColor: `${item.color}` }}>
                        {item.name}  
                        </li>
                    )
                }
                )}
            </ul>
            <button onClick ={(event)=>{{props.clearBurger(event)}}}>Reset Burger</button>
        </div>
    )
}
export default BurgerStack




