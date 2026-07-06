import { Plus, Trash2, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import axios from "axios";
import { productFormControls } from "@/config";
import ProductForm from "@/common/pform";
import { toast } from "sonner";


const initialFormData = {
    name : '',
    category : '',
    price : '',
    image: null,
    quantity : 0
}


function Products() {
    const [products, setProducts] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState(initialFormData)
    const [isLoading, setIsLoading] = useState(false)


    const fetchProducts = async () => {
        const res = await axios.get('http://localhost:5000/api/products')
        setProducts(res.data.products)

    }

    async function handleClick(event){

        
        
        if (event) event.preventDefault()
        setIsLoading(true)

        try {
            
            const data = new FormData()
            data.append('name', formData.name)
            data.append('category', formData.category)
            data.append('price', formData.price)
            data.append('image', formData.image)
            data.append('quantity', formData.quantity)

            
            const res = await axios.post('http://localhost:5000/api/products/', data);
            await fetchProducts()
            setIsLoading(false)
            toast.success(res.data.message, {position : "top-center"});
            
            setIsOpen(false)
            
        } catch (error) {  
            console.log(error.message) 
        }
    }  

    const handleDelete = async(productId) => {
        try {
            await axios.delete(`http://localhost:5000/api/products/${productId}`)
            fetchProducts()
            toast.success('Product Successfully deleted!!', {position : 'top-center'})
        } catch (error) {
            console.log(error.message);
        }
    }

    const handleEdit = async(product) => {
        try {
            
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {

        fetchProducts()

    }, [])

    return ( 
        <div className="px-12 pt-12">
            <Button className="w-full flex items-center gap-2 text-white  text-lg font-bold bg-foreground/90   shadow-sm " size="lg" 
                onClick ={() => setIsOpen(true)}        
            >
                <Plus color="white" size={30}/>
                <span>New Product</span>
            </Button>
            {
                isOpen && (
                    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                        <div className="bg-white rounded-xl p-6 w-full max-w-md flex flex-col gap-2">
                            <h2 className="font-bold text-2xl text-black self-center">Product Details</h2>
                            <ProductForm
                                formControls={productFormControls}
                                formData={formData}
                                setFormData={setFormData}
                                onSubmit={handleClick}
                            />
                            <div className="flex gap-2">
                                <Button type="submit" className='mt-2 w-1/2' onClick={handleClick} disabled={isLoading}> {isLoading ? 'Uploading...' : 'Submit'}</Button>
                                <Button type="submit" className='mt-2 w-1/2' onClick={() => setIsOpen(false)}>Cancel</Button>
                            </div>
                        </div>
                    </div>

                )
            }
            <table className="w-full mt-14 border-2 ">
                <thead className="text-left border-b-2">
                    <tr>
                        <th className="p-4 text-2xl">PRODUCT</th>
                        <th className="p-4 text-2xl">CATEGORY</th>
                        <th className="p-4 text-2xl">PRICE</th>
                        <th className="p-4 text-2xl">QUANTITY</th>
                        <th className="p-4 text-right text-2xl">ACTION</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => (
                            <tr key={product._id} className="border-b">
                                <td className="flex gap-4 p-4 ">
                                    <img src={product.imageUrl} alt="image of product" className="h-14 w-14 rounded-sm" />
                                    <span className="self-center text-xl text-black/80 font-semibold tracking-tight">{product.name}</span>
                                </td>
                                <td className="p-4 text-xl">{product.category} </td>
                                <td className="p-4 text-xl text-black/80 font-semibold">{product.price}</td>
                                <td className="p-4 text-xl text-black/80 font-semibold">{product.quantity}</td>
                                <td className="p-4 text-right space-x-6 text-xl">
                                    <button onClick={() => handleEdit(product)} className="hover:bg-white/80 w-8 h-10 px-1 rounded-sm" ><Pencil /></button>
                                    <button onClick={() => handleDelete(product._id)} className="hover:bg-white/80 w-8 h-10 px-1 rounded-sm"><Trash2 /></button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
     );
}

export default Products;