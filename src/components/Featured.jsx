import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


function Featured({featured}) {
    
    return ( 
        <section className="py-4 px-0  bg-mute ">
            <div className="flex items-start justify-between mb-4 px-4">
                <div >
                    <h2 className="text-black text-xl font-bold tracking-tight">Featured Products</h2>
                    <p className="text-foreground/50 text-xs tracking-tight">Handpicked favorites just for you</p>  
                </div>
                <span><Button>View all →</Button></span>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 ">
                {
                    featured.map(product => (
                        <div className="flex flex-col h-56 w-full mb-3 " key={product.id}>
                            <div className=" w-full h-[60%]">
                                <img
                                 src={`${product.image}`}
                                 alt="product image" 
                                 className="object-cover w-full h-full"
                                 />  
                            </div>
                            <div className="flex flex-col gap-1.5 px-2  border-t ">
                                <h3 className="text-lg tracking-tight font-semibold">{product.name}</h3>
                                <p className="text-xl font-bold text-foreground leading-none">{"\u20B5"}{product.price}</p>
                                <Button className="mb-2 w-full" size="sm">Purchase</Button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}

export default Featured;