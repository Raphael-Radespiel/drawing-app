import { useState } from "react";
import SpriteGrid from "./SpriteGrid"
import ColorPallet from "./ColorPallet"
import "./App.css"

export default function App() {
  const [selectedColor, setColor] = useState(["#FFFF"]);

  const colorPallet = [ "#213b25",  "#3a604a", "#4f7754", "#a19f7c", "#77744f", "#775c4f", "#603b3a", "#3b2137", "#170e19", "#2f213b", "#433a60", "#4f5277", "#65738c", "#7c94a1", "#a0b9ba", "#c0d1cc"];

  function changeSelectedColor(color){
    setColor(color); 
  }

  return (
    <div>
      <SpriteGrid selectedColor={selectedColor}/>
      <div className="bottom-container">
        <div className="selected-color" style={{backgroundColor: selectedColor}}>
        </div>
        <ColorPallet pallet={colorPallet} changeSelectedColor={changeSelectedColor}/>
        <button>New<br/>Sprite</button>
      </div>
    </div>
  )
}
