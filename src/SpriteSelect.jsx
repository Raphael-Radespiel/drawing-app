import {useEffect, useRef} from 'react'
import "./style/SpriteSelect.css"

export default function SpriteSelect({spriteArray, updateSelectedSprite}){

  return (
    <div className="sprite-select-container">
      {spriteArray.map((sprite, index) => {
        return <SpriteSelectCell key={index} sprite={sprite} spriteIndex={index} updateSelectedSprite={updateSelectedSprite}/>
      })}
    </div>
  )
}
function SpriteSelectCell({sprite, spriteIndex, updateSelectedSprite}){
  const canvas = useRef();

  let size = 56;

  function handleSelectedSpriteUpdate(){
    updateSelectedSprite(spriteIndex);
  }

  useEffect(() => {
    canvas.current.height = size;
    canvas.current.width = size;
    const context = canvas.current.getContext("2d");

    let n = size / 8;
    
    for(let x = 0; x < 8; x++){
      for(let y = 0; y < 8; y++){
        context.fillStyle = sprite[y*8+x];
        context.fillRect(x * n, y * n, n, n);
      } 
    }
  });

  return (
    <canvas ref={canvas} onClick={handleSelectedSpriteUpdate}></canvas>
  )
}
