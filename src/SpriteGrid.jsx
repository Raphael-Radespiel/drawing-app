import {useState, useEffect} from 'react'
import "./style/SpriteGrid.css"

export default function SpriteGrid({gridValues, spriteIndex, selectedColor, updateSpriteArray}){
  return (
    <div className="sprite-container">
      {gridValues[spriteIndex].map((color, index) => {
        return <SpriteGridCell key={index} color={color} selectedColor={selectedColor} index={index} updateSpriteArray={updateSpriteArray}/>
      })}
    </div>
  )
}

function SpriteGridCell({color, selectedColor, index, updateSpriteArray}){
  const [currentColor, setColor] = useState([color]);

  useEffect(() => {
    setColor(color);
  }, [color]);

  function handleSpriteCellClick(){
    setColor(selectedColor);
    updateSpriteArray(index, selectedColor);
  }

  return (
    <div className="sprite-cell" style={{backgroundColor: currentColor}} onClick={handleSpriteCellClick}>
    </div>
  )
}
