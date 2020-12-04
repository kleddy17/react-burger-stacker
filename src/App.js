import React, {useState} from "react";

// Components imports
import Ingredients from './components/Ingredients'
import IngredientList from './components/IngredientList'
import BurgerPane from './components/BurgerPane'
// import BurgerStack from './BurgerStack'


// CSS imports
import "./css/App.css";

const App = () => {
const [items,setItems]=useState
([{ name: "Kaiser Bun", color: "saddlebrown"},
{ name: "Sesame Bun", color: "sandybrown" },
{ name: "Gluten Free Bun", color: "peru" },
{ name: "Lettuce Wrap", color: "olivedrab" },
{ name: "Beef Patty", color: "#3F250B" },
{ name: "Soy Patty", color: "#3F250B" },
{ name: "Black Bean Patty", color: "#3F250B"},
{ name: "Chicken Patty", color: "burlywood" },
{ name: "Lettuce", color: "lawngreen" },
{ name: "Tomato", color: "tomato" },
{ name: "Bacon", color: "maroon" },
{ name: "Onion", color: "lightyellow" },
])
const [burger,setBurger] 

const addItem = (event,newItem )=>{
  event.preventDefault()
  console.log(newItem)
  console.log(burger)
  setBurger([newItem, ...burger])
}

  return (
  <div>
      <h1>Ingredient List:</h1>
     
      <IngredientList 
          items={items}
          addItem = {addItem} />
          
      <BurgerPane items={items}
          addItem = {addItem}burger={burger}/>

  </div>
    
  );
};

export default App
