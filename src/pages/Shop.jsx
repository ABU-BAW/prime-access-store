import { Button } from "@/components/ui/button"
import { Link, useSearchParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { CartContext } from "@/components/Features/ContextProvider"
import { cediSymbol } from "@/lib/utils"
import api from "@/lib/api"


function Shop() {
    const [products, setProducts] = useState([])
    const [searchParams] = useSearchParams();


    const category = searchParams.get("category");
    const { dispatch } = useContext(CartContext)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await api.get('/api/products')
                const allProducts = res.data.products;
                const filteredProducts = category ? allProducts.filter(p => p.category === category) : allProducts;
                setProducts(filteredProducts);
            } catch (error) {
                console.log(error.message);
            }

        }
        fetchProducts()
    }, [category])

    return (
        <section className="w-full min-h-screen  bg-muted">
            <div className="grid grid-cols-2 lg:grid-cols-4 ">
                {
                    products.map(product => (
                        <div
                            key={product._id}
                            className="flex flex-col h-60 lg:min-h-72 w-full mb-0.5  overflow-hidden  p-2"
                        >
                            <div className=" w-full h-[60%]">
                                <img
                                    src={`${product.imageUrl}`}
                                    alt="product image"
                                    className="object-cover w-full h-full overflow-hidden rounded-lg"
                                />
                            </div>
                            <div className="flex flex-col pt-1 pb-2   px-2 flex-1 justify-between">
                                <div className="flex flex-col gap-3">
                                    <h3 className="text-sm tracking-tight font-bold leading-normal line-clamp-2">{product.name}</h3>
                                    <p className="text-sm font-semibold text-foreground leading-0 mb-2">{cediSymbol}{product.price}</p>
                                </div>
                                
                                <Button
                                    className="w-full" size="sm"
                                    onClick={() => dispatch({ type: "Add", product: {...product, cartQuantity : 1 }})}
                                >Add to Cart</Button>
                                
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Shop

