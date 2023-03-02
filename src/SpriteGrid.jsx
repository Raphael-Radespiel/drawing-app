import SpriteGridCell from "./SpriteGridCell"
import "./SpriteGrid.css"

export default function SpriteGrid({selectedColor}){
  let gridValues = Array(64).fill("#FFFF");

  return (
    <div className="sprite-container">
      {gridValues.map((color, index) => {
        return <SpriteGridCell key={index} color={color} selectedColor={selectedColor}/>
      })}
    </div>
  )
}
