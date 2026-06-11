import { Outlet, Link } from "react-router-dom";
import { Store, LayoutDashboard, Archive, Shapes, FilePenLine, Plus, Search, BellRing, Settings } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useState } from "react";
import { productFormControls } from "@/config";
import axios from "axios";
import ProductForm from "@/common/pform";
import { toast } from "sonner"





const initialFormData = {
    name : '',
    category : '',
    price : '',
    image: null
}

function AdminLayout() { 
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState(initialFormData)
    const [isLoading, setIsLoading] = useState(false)


    async function onSubmit(event){
        if (event) event.preventDefault()
            setIsLoading(true)
        try {
            
            const data = new FormData()
            data.append('name', formData.name)
            data.append('category', formData.category)
            data.append('price', formData.price)
            data.append('image', formData.image)

            
            const res = await axios.post('http://localhost:5000/api/products/', data);
            setIsLoading(false)
            toast.success(res.data.message, {position : "top-center"});
            console.log(res.data);
            setIsOpen(false)
            
        } catch (error) {
            console.log(error.message)
        }
} 

    return ( 
        <div className="flex min-h-screen w-full px-0 mx-0">
            <div className="w-1/5 space-y-8  border bg-foreground/90 text-white pt-8 pl-8">     
                <div className="text-white flex items-center gap-4">
                    <div className="bg-white p-2 w-16 rounded-md"><Store color="black" size={48}/></div>
                    <span>
                        <h2 className="font-bold text-white tracking-tight text-3xl">StoreAdmin</h2>
                        <p className=" text-sm text-white/50">Manage your shop</p>
                    </span>
                </div>
              
                <ul className="space-y-4 hover:cursor-pointer">
                    <li >
                        <Link to= "/admin/overview" className="flex items-center gap-2 text-white/50 tracking-wider">
                            <LayoutDashboard />
                            <span>Overview</span>
                        </Link>
                    </li>
                    <li >
                        <Link to="/admin/products" className="flex items-center gap-2 text-white/50 tracking-wider">
                            <Archive />
                            <span>Products</span>
                        </Link>
                    </li>
                    <li >
                        <Link to="/admin/categories" className="flex items-center gap-2 text-white/50 tracking-wider">
                            <Shapes />
                            <span>Categories</span>
                        </Link>
                    </li>
                    <li >
                        <Link to="/admin/store-front" className="flex items-center gap-2 text-white/50 tracking-wider">
                            <FilePenLine />
                            <span>Storefront Editor</span>
                        </Link>
                    </li>
                </ul>

                <Button className=" flex items-center gap-2 text-black/90  text-lg font-bold bg-white mt-80 w-60 hover:bg-white  shadow-white/50 shadow-sm" size="lg" 
                    onClick = {() => setIsOpen(true)}
                >
                    <Plus color="black" size={30}/>
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
                                        onSubmit={onSubmit}
                                    />
                                    <div className="flex gap-2">
                                        <Button type="submit" className='mt-2 w-1/2' onClick={onSubmit} disabled={isLoading}> {isLoading ? 'Uploading...' : 'Submit'}</Button>
                                        <Button type="submit" className='mt-2 w-1/2' onClick={() => setIsOpen(false)}>Cancel</Button>
                                    </div>
                                </div>
                            </div>
    
                        )
                }
                 
            </div>
            <main className="w-4/5 bg-muted">
                <nav className="flex justify-between items-center px-8 w-full h-[10%] bg-background shadow-sm">
                    <div className="relative">
                        <Input type="search" placeholder = "Search orders,products...." className="pl-15 w-md bg-muted" ></Input>
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 "/>
                    </div>
                    <div className="flex items-center justify-between px-4 py-3">
                        <div className="flex items-center gap-8 pr-8">
                            <BellRing />
                            <Settings />
                        </div>
                        <div className="flex items-center gap-4 border-l-2 border-gray-300 pl-4">
                            <span>
                                <h3 className="text-lg font-semibold tracking-wide">Hassan Issa</h3>
                                <p className="text-sm tracking-tight">Administrator</p>
                            </span>
                            <img src="#" alt="avatar" className="w-15 h-15 rounded-full object-cover outline-2 bg-muted" />
                        </div>
                    </div>
                </nav>
                <Outlet />
            </main>
        </div>
     );
}

export default AdminLayout;