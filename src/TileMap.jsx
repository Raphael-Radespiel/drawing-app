import { useEffect, useRef } from "react"

export default function TileMap({tilemapArray, spriteArray, updateTilemap}){
  const canvas = useRef();  

  let size = 400;
  
  useEffect(() =>{
    canvas.current.height = size;
    canvas.current.width = size;
  }, []);

  useEffect(() =>{
    const context = canvas.current.getContext("2d");

    let n = size / 8;

    for(let x = 0; x < 8; x++){
      for(let y = 0; y < 8; y++){
        const currentTile = tilemapArray[y * 8 + x];
        if(currentTile == null){ 
          context.strokeStyle = "grey";
          context.strokeRect(x * n, y * n, n, n);
        }
        else{
          // RENDER SPRITE
          for(let s_x = 0; s_x < 8; s_x++){
            for(let s_y = 0; s_y < 8; s_y++){
              context.fillStyle = spriteArray[currentTile][s_y * 8 + s_x];
              context.fillRect(x * n + (s_x * n / 8), y * n + (s_y * n/8), n / 8, n / 8);
            } 
          }
        }
      } 
    }
  }, [tilemapArray]);

  function handleTilemapUpdate(e){
    let rect = e.target.getBoundingClientRect();
    let x = e.clientX - rect.left; //x position within the element.
    let y = e.clientY - rect.top;  //y position within the element.
    let clampedX = +((x - 25)/50 ).toFixed(0);
    let clampedY = +((y - 25)/50 ).toFixed(0);
    updateTilemap(clampedY * 8 + clampedX);
  }

  return (
    <canvas ref={canvas} onClick={handleTilemapUpdate}></canvas>
  )
}
