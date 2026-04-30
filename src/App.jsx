import './App.css'
import { Link } from 'react-router-dom';
import { DatalinesWithGrid } from "/home/lorenzo/Shopping-cart/src/components/neonblade-ui/datalines-with-grid/index.tsx";
import NeonGlow from "/home/lorenzo/Shopping-cart/src/components/neonblade-ui/neon-glow";
import NeonGlowCornerCutCard from "/home/lorenzo/Shopping-cart/src/components/neonblade-ui/neon-glow-corner-cut-card";

function App() {

  return (
    <>
    <div className="absolute w-screen h-screen">
      <DatalinesWithGrid />
      </div>

      <div className="flex flex-col gap-8 justify-center pt-12">
      <h1 className="text-8xl font-bold font-orbitron uppercase">
        <NeonGlow colors="green">Neon Shop</NeonGlow>
      </h1>
      </div>

      <div className="grid grid-cols-2  md:grid-cols-3 gap-6">
           <Link to="/shop">
             <NeonGlowCornerCutCard
          title=  "Shopping page"
          colorA="green"
          hoverEffect="pulse"
          glowIntensity="high"
          corner='all'
            />
           </Link>

           <Link to="/cart">
             <NeonGlowCornerCutCard
          title="Cart"
          colorA="green"
          hoverEffect="pulse"
          glowIntensity="high"
          corner='all'
            />
           </Link>
      </div>
      
    </>
  )
}

export default App
