import React, {useState} from "react";

const BurgerStack = () => {
    return (
        <div>
            <ul>
                {props.burger.map((item,index)=>{
                    return(<li key={index} style={{backgroundColor:`${item.color}`}}>
                        {item.name}
                       
                    </li>)
                })}
            </ul>
            
        </div>
    )
}

export default BurgerStack







export default BurgerStack