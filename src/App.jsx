/*import {useState} from 'react' */
import './App.css'
import { DatalinesWithGrid } from "/home/lorenzo/Shopping-cart/src/components/neonblade-ui/datalines-with-grid/index.tsx";

function App() {
  /*const [count, setCount] = useState(0)*/

  return (
    <>
    {/* Qui ci deve stare il titolo e tutto ciò che lo accompagna compresa la nav bar carta bianca su cosa aggiungere*/}
    <div className="relative w-screen h-screen">
      <DatalinesWithGrid />
      </div>
        
        {/* qui ci deve stare il componente del cart, usare react router per accedere al cart */}

        {/* qui ci deve stare gli item da mettere nel cart */}
      
    </>
  )
}

export default App
