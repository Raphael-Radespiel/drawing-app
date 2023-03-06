import { useState, useEffect, useMemo } from "react";
import SpriteSelect from "./SpriteSelect";
import SpriteGrid from "./SpriteGrid"
import TileMap from "./TileMap"
import ColorPallet from "./ColorPallet"
import "./style/App.css"

const LOCAL_SPRITE_STORAGE_VARIABLE = "pixel-canvas-app";
const LOCAL_TILEMAP_STORAGE_VARIABLE = "pixel-canvas-app-tilemap";

export default function App() {
  const [selectedColor, setColor] = useState("#FFFF");
  const [spriteArray, setSpriteArray] = useState([[]]);
  const [tilemapArray, setTilemapArray] = useState([]);
  const [selectedSprite, setSelectedSprite] = useState(0);
  const [appMode, setAppMode] = useState("sprite"); // sprite or tilemap

  useMemo(() => {
    if(JSON.parse(localStorage.getItem(LOCAL_SPRITE_STORAGE_VARIABLE)) == null){
      setSpriteArray([Array(64).fill("#FFFF")]);
    }
    else{
      setSpriteArray(JSON.parse(localStorage.getItem(LOCAL_SPRITE_STORAGE_VARIABLE)));
    }

    if(JSON.parse(localStorage.getItem(LOCAL_TILEMAP_STORAGE_VARIABLE)) == null){
      setTilemapArray(Array(64).fill(null));
    }
    else{
      setTilemapArray(JSON.parse(localStorage.getItem(LOCAL_TILEMAP_STORAGE_VARIABLE)));
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem(LOCAL_SPRITE_STORAGE_VARIABLE, JSON.stringify(spriteArray));
  }, [spriteArray]);

  useEffect(() => {
    localStorage.setItem(LOCAL_TILEMAP_STORAGE_VARIABLE, JSON.stringify(tilemapArray));
  }, [tilemapArray]);

  const colorPallet = [ "#430067", "#94216a", "#ff004d", "#ff8426", "#ffdd34", "#50e112", "#3fa66f", "#365987", "#000000", "#0033ff", "#29adff", "#00ffcc", "#fff1e8", "#c2c3c7", "#ab5236", "#5f574f"];

  function changeSelectedColor(color){
    setColor(color); 
  }

  function updateSpriteArray(index, color){
    let newSpriteArray = [...spriteArray];
    newSpriteArray[selectedSprite][index] = color;
    setSpriteArray(newSpriteArray);
  }

  function createNewSprite(){
    if(JSON.parse(localStorage.getItem(LOCAL_SPRITE_STORAGE_VARIABLE)).length >= 8) return;
    let cloneSpriteArray = [...spriteArray];
    cloneSpriteArray.push(Array(64).fill("#FFFF"));
    setSpriteArray(cloneSpriteArray);
  }

  function updateSelectedSprite(index){
    setSelectedSprite(index);
  }

  function toggleMode(){
    setAppMode(appMode == "sprite" ? "tilemap" : "sprite");
  }

  function updateTilemap(tilemapIndex){
    const cloneTilemapArray = [...tilemapArray];
    cloneTilemapArray[tilemapIndex] = selectedSprite;
    setTilemapArray(cloneTilemapArray);
  }

  return (
    <>
      <button onClick={toggleMode}>switch mode</button>
      <div style={{display: "flex"}}>
        <SpriteSelect spriteArray={spriteArray} updateSelectedSprite={updateSelectedSprite}/>

        {appMode == "sprite" ? 
        <div className="main-display">
          <SpriteGrid gridValues={spriteArray} spriteIndex={selectedSprite} selectedColor={selectedColor} updateSpriteArray={updateSpriteArray}/>
          <div className="bottom-container">
            <div className="selected-color" style={{backgroundColor: selectedColor}}>
            </div>
            <ColorPallet pallet={colorPallet} changeSelectedColor={changeSelectedColor}/>
            <button onClick={createNewSprite}>New<br/>Sprite</button>
          </div>
        </div>:
        <div className="main-display">
          <TileMap tilemapArray={tilemapArray} spriteArray={spriteArray} updateTilemap={updateTilemap}/>
        </div>
        }

      </div>
    </>
  )
}
