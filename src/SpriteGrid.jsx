import SpriteGridCell from "./SpriteGridCell"
import "./SpriteGrid.css"

export default function SpriteGrid({gridValues, selectedColor, updateSpriteArray}){
  return (
    <div className="sprite-container">
      {gridValues.map((color, index) => {
        return <SpriteGridCell key={index} color={color} selectedColor={selectedColor} index={index} updateSpriteArray={updateSpriteArray}/>
      })}
    </div>
  )
}
