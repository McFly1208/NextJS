import { CartCounter } from "@/app/shopping-cart";




export const metadata = {
  title: 'ShoppingCart',
  description:' Counter',
}

export default function CounterPage() {


  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
     <span>Carrito de compras</span>
     <CartCounter value={20}/>  
    
    </div>
  );
}