import './ColorPallet.css'

export default function colorPallet({pallet}){
  return(
    <div className='pallet-container'>
      {pallet.map(color => {
        return <div key={color} className='pallet-cell' style={{backgroundColor: color}}></div>
      })} 
    </div>
  )
}
