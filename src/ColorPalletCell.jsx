export default function ColorPalletCell({color, changeSelectedColor}){

  function handleChangeSelectedColor(){
    changeSelectedColor(color);
  }

  return (
    <div className="pallet-cell" style={{backgroundColor: color}} onClick={handleChangeSelectedColor}>
    </div>
  )
}
