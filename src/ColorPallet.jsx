import ColorPalletCell from "./ColorPalletCell"
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
