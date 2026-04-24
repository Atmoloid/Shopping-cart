/*import {useState} from 'react' */
import './App.css'
import { DatalinesWithGrid } from "/home/lorenzo/Shopping-cart/src/components/neonblade-ui/datalines-with-grid/index.tsx";
import NeonGlow from "/home/lorenzo/Shopping-cart/src/components/neonblade-ui/neon-glow";
import NeonGlowCornerCutCard from "/home/lorenzo/Shopping-cart/src/components/neonblade-ui/neon-glow-corner-cut-card";
import { ShoppingCart } from 'lucide';

function App() {
  /*const [count, setCount] = useState(0)*/

  return (
    <>
    {/* Qui ci deve stare il titolo e tutto ciò che lo accompagna compresa la nav bar carta bianca su cosa aggiungere*/}
    <div className="absolute w-screen h-screen">
      <DatalinesWithGrid />
      </div>

      <div className="flex flex-col gap-8 justify-center pt-12">
      <h1 className="text-8xl font-bold font-orbitron uppercase">
        <NeonGlow colors="green">Neon Shop</NeonGlow>
      </h1>
      </div>

      <div className="grid grid-cols-2  md:grid-cols-3 gap-6 pt-12">
           <NeonGlowCornerCutCard
        title=  "Shopping page"
        colorA="green"
        hoverEffect="pulse"
        glowIntensity="high"
        corner='all'
          />

           <NeonGlowCornerCutCard
        title="Cart"
        colorA="green"
        hoverEffect="pulse"
        glowIntensity="high"
        corner='all'
          />
      </div>
        {/* qui ci deve stare il componente del cart, usare react router per accedere al cart */}

        {/* qui ci deve stare gli item da mettere nel cart */}
      
    </>
  )
}

export default App
