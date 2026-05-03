import { shuffled } from "@/data/products"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
//import { products } from "@/data/products"

function Shop() {
    

    return (
        <section className="w-full min-h-screen  bg-muted">
            <div className="grid grid-cols-2 lg:grid-cols-4 "> 
                {
                    shuffled.map(product => (
                        <div 
                            key={product.id}
                            className="flex flex-col h-60 lg:min-h-72 w-full mb-0.5  overflow-hidden  p-2" 
                        >
                            <div className=" w-full h-[60%]">
                                <img
                                 src={`${product.image}`}
                                 alt="product image" 
                                 className="object-cover w-full h-full overflow-hidden rounded-lg"
                                 />  
                            </div>
                            <div className="flex flex-col pt-1 pb-2   px-2 flex-1 justify-between">
                                <div className="flex flex-col gap-3">
                                    <h3 className="text-sm tracking-tight font-bold leading-normal line-clamp-2">{product.name}</h3>
                                    <p className="text-sm font-semibold text-foreground leading-0 mb-2">GH{"\u20B5"}{product.price}</p>
                                </div>
                                <Link to= {`/shop/${product.slug}/${product.name}`}>
                                    <Button className="w-full" size="sm">Purchase</Button>
                                </Link>
                            </div>
                        </div> 
                    ))
                }
            </div>
        </section>
 )
}

export default Shop

