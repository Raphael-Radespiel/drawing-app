import "./SpriteGrid.css"

export default function SpriteGrid(){
  let gridValues = Array(64).fill("#FFFF");

  return (
    <div className="sprite-container">
      {gridValues.map(color => {
        return <div className="sprite-cell" style={{backgroundColor: color}}></div>
      })}
    </div>
  )
}
