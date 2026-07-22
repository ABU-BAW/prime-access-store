import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "./Features/ContextProvider";
import { cediSymbol } from "@/lib/utils";
import api from "@/lib/api"
import { toast } from "sonner";

function Featured() {

    const [featured, setFeatured] = useState([])

    const { dispatch } = useContext(CartContext)

    useEffect(() => {
        const fetchProducts = async() => {
            try {
                const res = await api.get('/api/products')
                setFeatured(res.data.products.slice(0, 4));
            } catch (error) {
                console.log(error.message);
            }
            
        }
        fetchProducts()
    }, [])
    
    return ( 
        <section className="py-4 px-0  bg-mute ">
            <div className="flex items-start justify-between mb-4 px-1">
                <div >
                    <h2 className="text-black text-xl font-bold tracking-tight">Featured Products</h2>
                    <p className="text-foreground/50 text-xs tracking-tight">Handpicked favorites just for you</p>  
                </div>
                <Link
                    to="/shop"
                >
                    <span><Button>View all →</Button></span>
                </Link>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 ">
                {
                    featured.map(product => (
                        <Link to={`/shop/${product._id}` } key={product._id}>
                            <div
                               
                                className="flex flex-col h-60 lg:min-h-72 w-full mb-0.5
                                lg:hover:-translate-y-1.5 lg:transition duration-300 border lg:border-foreground/10 rounded-lg overflow-hidden"
                            >
                                <div className=" w-full h-[60%]">
                                    <img
                                     src={`${product.imageUrl}`}
                                     alt="product image"
                                     className="object-cover w-full h-full overflow-hidden"
                                     />
                                </div>
                                <div className="flex flex-col pt-1 pb-2  border-t  px-2 flex-1 justify-between">
                                    <div className="flex flex-col gap-3">
                                        <h3 className="text-sm tracking-tight font-bold leading-normal line-clamp-2">{product.name}</h3>
                                        <p className="text-sm font-semibold text-foreground leading-0 mb-2">{cediSymbol}{product.price}</p>
                                    </div>
                            
                                    <Button className="w-full" size="sm"
                                        onClick={() => {
                                            dispatch({type : "Add", product :{ ...product, cartQuantity : 1}})
                                            toast.success('Added to Cart!!', {position : "top-center"})
                                        }}
                                    >
                                        Add to Cart
                                    </Button>
                            
                                </div>
                            
                            </div>
                        </Link>
                         
                    ))
                }
            </div>
        </section>
    );
}

export default Featured;