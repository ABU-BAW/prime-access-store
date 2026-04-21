import { categories } from "@/data/products";
import { Button } from "./ui/button";
import { useLocation, useParams } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";





function CategoryList() {

    const { id } = useParams();
    const category = categories.find(c => c.label === id);
    const categoryProducts = category.products;
    

    const location = useLocation();
    console.log(location.pathname);

    return ( 
        <div className="w-full min-h-screen bg-muted ">
            <Breadcrumb />
            <h1 className="font-bold text-foreground tracking-tight text-xl mb-2">{category.categoryName}</h1>

            <div className="grid grid-cols-2 lg:grid-cols-4 "> 
                {
                    categoryProducts.map(product => (
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
                                    <h3 className="text-sm tracking-tight font-bold leading-normal line-clamp-2">{product.Name}</h3>
                                    <p className="text-sm font-semibold text-foreground leading-0 mb-2">GH{"\u20B5"}{product.price}</p>
                                </div>
                                <Button className="w-full" size="sm">Purchase</Button>
                            </div>
                        </div> 
                    ))
                }
            </div>
        </div>
     );
}

export default CategoryList;