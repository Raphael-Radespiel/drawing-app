import {useState} from 'react'

export default function SpriteGridCell({color, selectedColor}){
  const [currentColor, setColor] = useState([color]);

  function handleSpriteCellClick(){
    setColor(selectedColor);
  }

  return (
    <div className="sprite-cell" style={{backgroundColor: currentColor}} onClick={handleSpriteCellClick}>
    </div>
  )
}
