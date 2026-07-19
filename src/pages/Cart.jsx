import { CartContext } from "@/components/Features/ContextProvider";
import { useContext, useState } from "react";
import { ShoppingCart , Plus , Minus, Trash2,} from "lucide-react";
import { cediSymbol } from "@/lib/utils";
import { totalItems, totalPrice } from "@/components/Features/CartReducer";
import { Link } from "react-router-dom";


function Cart() {
    const {cart, dispatch} = useContext(CartContext)

    const Increase = (id) => dispatch({type : "Increase", id})
    const Decrease = (id) => dispatch({type : "Decrease", id})
   
    return ( 
        <div className="flex flex-col bg-muted p-2 gap-4 min-h-full">
            <h2 className="flex gap-1 self-center font-bold text-xl tracing-tight">My Cart <span><ShoppingCart size={30} strokeWidth={2}  /></span></h2>
            <div>
                {
                    cart.map(product => (
                        <div key={product._id} className=" relative flex gap-4 border-b mb-4 pb-4">
                            <img className="h-30 w-30 rounded-sm"  src={product.imageUrl} alt={`${product.name} image`} />
                            <div className="flex flex-col justify-around w-full relative">
                                <p className="text-lg font-medium tracking-tight">{product.name}</p>
                                <div className="flex justify-between items-center">
                                    <span  className="text-2xl font-bold">
                                        {cediSymbol}{product.price}
                                    </span>
                                    <div className="flex gap-2">
                                        <button className="bg-black/80 text-white h-8 w-8 rounded-sm flex justify-center items-center" onClick={() => Decrease(product._id)}><Minus color="white" size={10} strokeWidth={1.25} absoluteStrokeWidth /></button>
                                        {product.cartQuantity}
                                        <button className="bg-black/80 text-white h-8 w-8 rounded-sm flex justify-center items-center" onClick={() => Increase(product._id)}><Plus color="white" size={10} strokeWidth={1.25} absoluteStrokeWidth /></button>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-0 right-0" onClick={() => dispatch({type : "Remove", id : product._id})}><Trash2 size={25} strokeWidth={2} absoluteStrokeWidth /></div>
                        </div>
                        
                    ))
                }
            </div>
            <div className="bg-white p-2 text-lg tracking-tight text-white rounded-lg space-y-4">
                <p className="text-black">Total Items : {totalItems(cart)}</p>
                <p className="text-black">Total Price : {cediSymbol} {totalPrice (cart)} </p>
                <Link 
                    to="/checkout" 
                    state={{subtotal : totalPrice(cart)}} 
                    className="bg-black/80 text-lg w-full rounded-md shadow-md text-white flex items-center justify-center py-2">
                    Proceed to checkout
                </Link>
            </div>
            
        </div>
     );
}

export default Cart;