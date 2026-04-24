import './cart.css'
import { DatalinesWithGrid } from "/home/lorenzo/Shopping-cart/src/components/neonblade-ui/datalines-with-grid/index.tsx";


function Cart() {
    return (
        <>
        <div className="absolute w-screen h-screen">
      <DatalinesWithGrid />
      </div>
        {/* quando un item viene aggiunto deve comparire il numero di item nel cart in real time  sia per aggiungrli che per rimuoverli */}

         {/*  nel cart si devono vedere gli item e la loro quantità e rimuoverli o aumentare*/}

        </>
    )
}

export default Cart