import './cart.css'
import { DatalinesWithGrid } from "/home/lorenzo/Shopping-cart/src/components/neonblade-ui/datalines-with-grid/index.tsx";
import NeonGlow from "/home/lorenzo/Shopping-cart/src/components/neonblade-ui/neon-glow";
import { useCart } from './CartContext';
import { Trash } from 'lucide-react';


function Cart() {
    const { getTotalItems, cartItems, removeFromCart } = useCart();
    const totalItems = getTotalItems();

    return (
        <>
        <div className="absolute w-screen h-screen pointer-events-none">
      <DatalinesWithGrid />
      </div>
      <h1 className="text-8xl font-bold font-orbitron uppercase">
                    <NeonGlow colors="green">Cart</NeonGlow>
          </h1>
        <h2 className="text-4xl font-bold font-orbitron uppercase">
                    <NeonGlow colors="green">You have {totalItems} items in your cart</NeonGlow>
                </h2>
         <div className='display-flex w-screen h-100 bg-pink '>
  {cartItems.map((item) => (
    <div key={item.id} className="flex flex-row flex-wrap p-4 border-4 border-green-500 5 rounded m-5 gap-4">
        <img src={item.image} alt={item.title}  className='w-50 h-50 opacity-100' />
         <div className='flex flex-col flex-1'>
      <h3 className='flex justify-start  order-5 text-2xl mt-4'>{item.title}</h3>
      <p className='flex justify-start  order-5 text-2xl mt-4'>Quantity: {item.quantity}</p>
         </div>
      <div className='flex flex-col items-end gap-35'>
        <p className='text-4xl'>Price: <NeonGlow colors="green">${item.price.toFixed(2)}</NeonGlow></p>
      <div>  <button className='cursor-pointer hover:text-red-500 transition-colors' onClick={() => removeFromCart(item.id)} ><Trash /></button> </div>
      </div>
    </div>
  ))}
</div>
        </>
    )
}

export default Cart