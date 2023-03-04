import './style/ColorPallet.css'

export default function colorPallet({pallet, changeSelectedColor}){
  return(
    <div className='pallet-container'>
      {pallet.map(color => {
        return <ColorPalletCell key={color} color={color} changeSelectedColor={changeSelectedColor}/>
      })} 
    </div>
  )
}

function ColorPalletCell({color, changeSelectedColor}){

  function handleChangeSelectedColor(){
    changeSelectedColor(color);
  }

  return (
    <div className="pallet-cell" style={{backgroundColor: color}} onClick={handleChangeSelectedColor}>
    </div>
  )
}
