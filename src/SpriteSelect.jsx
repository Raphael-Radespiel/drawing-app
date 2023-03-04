import SpriteSelectCell from "./SpriteSelectCell"
import "./style/SpriteCell.css"

export default function SpriteSelect({spriteArray, updateSelectedSprite}){

  return (
    <div className="sprite-select-container">
      {spriteArray.map((sprite, index) => {
        return <SpriteSelectCell key={index} sprite={sprite} spriteIndex={index} updateSelectedSprite={updateSelectedSprite}/>
      })}
    </div>
  )
}
