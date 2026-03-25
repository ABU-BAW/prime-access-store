import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
    
function Listing({products}) {
    const navigate = useNavigate();
    
    const handleClick = (id) => {
        navigate(`/shop/${id}`);
    }
    
    return ( 
        <section className="py-6 px-4 bg-white border-t-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 max-w-6xl mx-auto">
                {products.map((product) => (
                    <div 
                        key={product.id} 
                        className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                        {/* Square Product Image */}
                        <div className="relative w-full aspect-square overflow-hidden bg-gray-100">
                            <img 
                                src="/lct.jpg" 
                                alt={product.name}  
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        
                        {/* Product Info with bg-muted */}
                        <div className="p-3 sm:p-4 bg-muted flex flex-col gap-2">
                            {/* Product Name */}
                            <h3 className="text-sm sm:text-base font-semibold text-foreground line-clamp-2">
                                {product.name}
                            </h3>
                            
                            {/* Price */}
                            <p className="text-lg sm:text-xl font-bold text-foreground">
                                ${product.price}
                            </p>
                            
                            {/* Button */}
                            <Button 
                                className="w-full bg-black text-white hover:bg-gray-800 text-xs sm:text-sm font-semibold py-2 sm:py-2.5" 
                                onClick={() => handleClick(product.id)}
                            >
                                Full Description
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Listing;