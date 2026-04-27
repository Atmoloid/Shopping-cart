import './shop.css'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DatalinesWithGrid } from "/home/lorenzo/Shopping-cart/src/components/neonblade-ui/datalines-with-grid/index.tsx";
import NeonGlow from "/home/lorenzo/Shopping-cart/src/components/neonblade-ui/neon-glow";
import AccentFrame from "/home/lorenzo/Shopping-cart/src/components/neonblade-ui/accent-frame";
import { FishingHook, ShoppingCart } from 'lucide-react';


function Shop() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=10')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Errore nel caricamento dei prodotti:', error);
                setLoading(false);
            });
    }, []);

    return (
        <>
        <div className="absolute w-screen h-screen">
      <DatalinesWithGrid />
      </div>

      <h1 className="text-8xl font-bold font-orbitron uppercase">
              <NeonGlow colors="green">Shop</NeonGlow>
    </h1>
    <Link to="/cart">
    <button className='text-green-500 font-bold py-4 px-6 rounded flex items-center justify-center fixed top-4 right-4 z-50 transition-all' >
      <ShoppingCart className="w-8 h-8" />
      </button>
    </Link>
     
   <div className='shop-section'>
        {loading ? (
            <p className="text-green">Loading</p>
        ) : (
            products.map((product, index) => (
                <AccentFrame
                    key={product.id}
                    color="green"
                    mode="quad"
                    hoverEffect="pulse"
                    animated
                    bgVariant="subtle"
                    className="text-white text-center p-4 w-64"
                    cornerLength={24}
                >
                    <img src={product.image} alt={product.title} className="w-32 h-32 object-contain mx-auto mb-4" />
                    <h3 className="text-lg font-bold mb-2">{product.title}</h3>
                    <p className="text-2xl font-bold text-green-400">${product.price}</p>
                    <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded justify-center flex ">
                        <ShoppingCart className="w-5 h-5 mr-2" /><input type="number" id="item-count" name="item-count" min="1" max="100" border={5} />
                    </button>
                </AccentFrame>
            ))
        )}
    </div>

        </>
    )
}

export default Shop