import {useEffect, useRef} from 'react'

export default function SpriteSelectCell({sprite}){
  const canvas = useRef();

  let size = 80;

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

  }, []);

  return (
    <canvas ref={canvas}></canvas>
  )
}
