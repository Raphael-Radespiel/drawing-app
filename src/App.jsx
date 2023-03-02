import { useState, useEffect, useMemo } from "react";
import SpriteGrid from "./SpriteGrid"
import ColorPallet from "./ColorPallet"
import "./App.css"

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

  const colorPallet = [ "#213b25",  "#3a604a", "#4f7754", "#a19f7c", "#77744f", "#775c4f", "#603b3a", "#3b2137", "#170e19", "#2f213b", "#433a60", "#4f5277", "#65738c", "#7c94a1", "#a0b9ba", "#c0d1cc"];

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
    <div>
      <SpriteGrid gridValues={spriteArray[0]} selectedColor={selectedColor} updateSpriteArray={updateSpriteArray}/>
      <div className="bottom-container">
        <div className="selected-color" style={{backgroundColor: selectedColor}}>
        </div>
        <ColorPallet pallet={colorPallet} changeSelectedColor={changeSelectedColor}/>
        <button onClick={createNewSprite}>New<br/>Sprite</button>
      </div>
    </div>
  )
}
