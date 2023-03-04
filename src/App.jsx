import { useState, useEffect, useMemo } from "react";
import SpriteSelect from "./SpriteSelect";
import SpriteGrid from "./SpriteGrid"
import ColorPallet from "./ColorPallet"
import "./style/App.css"

const LOCAL_STORAGE_VARIABLE = "pixel-canvas-app";

export default function App() {
  const [selectedColor, setColor] = useState("#FFFF");
  const [spriteArray, setSpriteArray] = useState([[]]);

  useMemo(() => {
    if(JSON.parse(localStorage.getItem(LOCAL_STORAGE_VARIABLE)) == null){
      setSpriteArray([Array(64).fill("#FFFF")]);
    }
    else{
      setSpriteArray(JSON.parse(localStorage.getItem(LOCAL_STORAGE_VARIABLE)));
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_VARIABLE, JSON.stringify(spriteArray));
  }, [spriteArray]);

  const colorPallet = [ "#430067", "#94216a", "#ff004d", "#ff8426", "#ffdd34", "#50e112", "#3fa66f", "#365987", "#000000", "#0033ff", "#29adff", "#00ffcc", "#fff1e8", "#c2c3c7", "#ab5236", "#5f574f"];

  function changeSelectedColor(color){
    setColor(color); 
  }

  // NOW WE ARE GOING TO HAVE TO CREATE A NEW STATE OF SPRITE INDEX 
  // we'll just update sprite array [0] for now
  function updateSpriteArray(index, color){
    let newSpriteArray = [...spriteArray];
    newSpriteArray[0][index] = color;
    setSpriteArray(newSpriteArray);
  }

  function createNewSprite(){
    if(JSON.parse(localStorage.getItem(LOCAL_STORAGE_VARIABLE)).length >= 8) return;
    let cloneSpriteArray = [...spriteArray];
    cloneSpriteArray.push(Array(64).fill("#FFFF"));
    setSpriteArray(cloneSpriteArray);
  }

  return (
    <div style={{display: "flex"}}>
      <SpriteSelect spriteArray={spriteArray}/>
      <div className="main-display">
        <SpriteGrid gridValues={spriteArray[0]} selectedColor={selectedColor} updateSpriteArray={updateSpriteArray}/>
        <div className="bottom-container">
          <div className="selected-color" style={{backgroundColor: selectedColor}}>
          </div>
          <ColorPallet pallet={colorPallet} changeSelectedColor={changeSelectedColor}/>
          <button onClick={createNewSprite}>New<br/>Sprite</button>
        </div>
      </div>
    </div>
  )
}
