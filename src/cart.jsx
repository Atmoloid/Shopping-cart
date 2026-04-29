import './cart.css'
import { DatalinesWithGrid } from "/home/lorenzo/Shopping-cart/src/components/neonblade-ui/datalines-with-grid/index.tsx";
import NeonGlow from "/home/lorenzo/Shopping-cart/src/components/neonblade-ui/neon-glow";
import { useCart } from './CartContext';


function Cart() {
    const { getTotalItems } = useCart();
    const totalItems = getTotalItems();

    return (
        <>
        <div className="absolute w-screen h-screen">
      <DatalinesWithGrid />
      </div>
      <h1 className="text-8xl font-bold font-orbitron uppercase">
                    <NeonGlow colors="green">Cart</NeonGlow>
          </h1>
        <h2 className="text-4xl font-bold font-orbitron uppercase">
                    <NeonGlow colors="green-400">You have {totalItems} items in your cart</NeonGlow>
                </h2>
         {/*  nel cart si devono vedere gli item e la loro quantità e rimuoverli o aumentare*/}
         
        </>
    )
}

export default Cart