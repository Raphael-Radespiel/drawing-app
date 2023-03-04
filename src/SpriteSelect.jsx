import SpriteSelectCell from "./SpriteSelectCell"
import "./style/SpriteCell.css"

export default function SpriteSelect({spriteArray}){

  // BE CAREFUL, FIX THIS KEY VALUE LATER TODO:
  return (
    <div className="sprite-select-container">
      {spriteArray.map((sprite) => {
        return <SpriteSelectCell key={sprite} sprite={sprite}/>
      })}
    </div>
  )
}
