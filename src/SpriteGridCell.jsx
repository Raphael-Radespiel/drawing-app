import {useState} from 'react'

export default function SpriteGridCell({color, selectedColor, index, updateSpriteArray}){
  const [currentColor, setColor] = useState([color]);

  function handleSpriteCellClick(){
    setColor(selectedColor);
    updateSpriteArray(index, selectedColor);
  }

  return (
    <div className="sprite-cell" style={{backgroundColor: currentColor}} onClick={handleSpriteCellClick}>
    </div>
  )
}
