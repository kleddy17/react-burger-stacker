import React, {useState} from "react"

const Ingredients = (props) =>{
    console.log(props.item)

return(
    <div style ={{ display :"flex" , flexDirection: "row", justifyContent: "space-between", alignContent:"center", alignItems:"flex-end"}}>
    <p>{props.item}</p> 
    </div>
    )
}

export default Ingredients

