import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
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
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 ">
                {
                    featured.map(product => (
                        <Card className="mx-auto w-full max-w-sm pt-0" key={product.id}>
                            <img
                                src= {`${product.image}`}
                                alt="product image"
                                className=" aspect-video w-full object-cover "
                            />
                            <CardHeader>
                                <CardTitle>{product.name}</CardTitle>
                                <CardDescription>
                                    {product.price}
                                </CardDescription>
                            </CardHeader>
                            <CardFooter>
                                <Button className="w-full">Purchase</Button>
                            </CardFooter>
                        </Card>
                    ))
                }
            </div>
        </section>
    );
}

export default Featured;