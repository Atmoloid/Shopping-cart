import './shop.css'
import { DatalinesWithGrid } from "/home/lorenzo/Shopping-cart/src/components/neonblade-ui/datalines-with-grid/index.tsx";


function Shop() {
    return (
        <>
        <div className="absolute w-screen h-screen">
      <DatalinesWithGrid />
      </div>
   {/* ogni prodotto deve avere un elemento di cart, per aggiungerlo al cart, */} 

   {/*inoltre aggiungere uno spazio in cui gli utenti possono type il numero di item che vogliono,aggiungere anche  due frecce in alto e in basso*/ }

   {/* gli item vanno presi da Fakestore API */ }


        </>
    )
}

export default Shop
