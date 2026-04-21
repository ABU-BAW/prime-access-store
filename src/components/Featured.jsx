import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom";
import { featured } from "@/data/products"


function Featured() {
    
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
                        <div 
                            key={product.id}
                            className="flex flex-col h-60 lg:min-h-72 w-full mb-0.5 
                            lg:hover:-translate-y-1.5 lg:transition duration-300 border lg:border-foreground/10 rounded-lg overflow-hidden" 
                        >
                            <div className=" w-full h-[60%]">
                                <img
                                 src={`${product.image}`}
                                 alt="product image" 
                                 className="object-cover w-full h-full overflow-hidden"
                                 />  
                            </div>
                            <div className="flex flex-col pt-1 pb-2  border-t  px-2 flex-1 justify-between">
                                <div className="flex flex-col gap-3">
                                    <h3 className="text-lg tracking-tight font-bold leading-normal">{product.name}</h3>
                                    <p className="text-sm font-semibold text-foreground leading-0 mb-2">GH{"\u20B5"}{product.price}</p>
                                </div>
                                <Button className="w-full" size="sm">Purchase</Button>
                            </div>
                        </div> 
                    ))
                }
            </div>
        </section>
    );
}

export default Featured;