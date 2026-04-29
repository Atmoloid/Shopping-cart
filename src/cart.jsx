import './cart.css'
import { DatalinesWithGrid } from "/home/lorenzo/Shopping-cart/src/components/neonblade-ui/datalines-with-grid/index.tsx";
import NeonGlow from "/home/lorenzo/Shopping-cart/src/components/neonblade-ui/neon-glow";
import { useCart } from './CartContext';


function Cart() {
    const { getTotalItems, cartItems } = useCart();
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
                    <NeonGlow colors="green">You have {totalItems} items in your cart</NeonGlow>
                </h2>
         {/*  nel cart si devono vedere gli item e la loro quantità e rimuoverli o aumentare*/}
         <div className='display-flex w-screen h-100 bg-pink '>
  {cartItems.map((item) => (
    <div key={item.id} className="flex flex-row flex-wrap p-4 border-4 border-green-500 5 rounded m-5 gap-4">
        <img src={item.image} alt={item.title}  className='w-50 h-50' />
         <div className='flex flex-col flex-1'>
      <h3 className='flex justify-start  order-5 text-2xl mt-4'>{item.title}</h3>
      <p className='flex justify-start  order-5 text-2xl mt-4'>Quantity: {item.quantity}</p>
         </div>
      <p className='flex justify-end  order-5 text-3xl mt-1 '>Price: <NeonGlow colors="green">${item.price.toFixed(2)}</NeonGlow></p>
    </div>
  ))}
</div>
        </>
    )
}

export default Cart