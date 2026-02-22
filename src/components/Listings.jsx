import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { useNavigate } from "react-router-dom";



    


function Listing({products}) {
    const navigate = useNavigate();

    const handleClick = (id) =>{
      
        navigate(`/shop/${id}`);

    }


    return ( 
        <div className="grid border-t-2 mt-2 p-4 grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
            {
                products.map((product) => (
                    <Card key={product.id} className="overflow-y-hidden bg-muted p-0 filter drop-shadow-lg">
                        <img src="/lct.jpg" alt="image of a product"  className="w-full h-40 object-cover border-b-2  "/>
                        <div className="p-4 flex flex-col items-center gap-2">
                            <h5 className="text-lg font-semibold text-center">{product.name}</h5>
                            <p className="text-xl font-bold">${product.price}</p>
                            <Button className="mt-2 text-base font-semibold text-white" onClick={() => handleClick(product.id)} >Full Description</Button>
                        </div>
                        
                    </Card>
                ))
            }
        </div>
     );
}

export default Listing