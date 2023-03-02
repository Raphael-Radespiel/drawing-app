import SpriteGrid from "./SpriteGrid"
import ColorPallet from "./ColorPallet"

export default function App() {
  const colorPallet = [ "#213b25",  "#3a604a", "#4f7754", "#a19f7c", "#77744f", "#775c4f", "#603b3a", "#3b2137", "#170e19", "#2f213b", "#433a60", "#4f5277", "#65738c", "#7c94a1", "#a0b9ba", "#c0d1cc"];

  return (
    <div>
      <SpriteGrid/>
      <ColorPallet pallet={colorPallet}/>
    </div>
  )
}
