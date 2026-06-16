
import {Calendar, Download, SquarePlus, Images, FileCheckCorner, Banknote, ShoppingBag, TriangleAlert } from "lucide-react"
import { useEffect, useState } from "react";
import axios from "axios"


function Overview() {
    const [products, setProducts] = useState([]);

    
    const fetchProducts = async () => {
    const res = await axios.get('http://localhost:5000/api/products')
    setProducts(res.data.products)
    }

    useEffect(() => {
        fetchProducts();
    },[])


    const stock = products.length;
    

    return ( 
        <>
            <div className="pt-10 px-8">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="font-bold text-black tracking-wide text-3xl">Overview Dashboard</h1>
                        <p className="text-md text-black/60">Here's what's happening with your store today..</p>
                    </div>
                    <div className="flex  gap-4">
                        <div className="flex items-center gap-2 justify-center bg-white border-black/20 border w-40 h-8 rounded-md">
                            <Calendar />
                            <span>Last 30 days</span>
                        </div>
                        <div className="flex items-center gap-2 justify-center bg-foreground/90 border-black/20 border w-40 h-8 rounded-md">
                            <Download color= "white" />
                            <span className="text-white">Export Report</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-between px-8 py-10 ">

                <div className="h-72 w-72 bg-white  rounded-2xl flex flex-col justify-end items-center pb-12 shadow-md">
                <div className="bg-foreground/10 h-12 w-12 rounded-md flex justify-center items-center mb-8 self-start ml-16 "><Banknote color="#000000" /></div>
                    <p className="text-md text-black/60 ">TOTAL REVENUE</p>
                    <p className="text-2xl font-bold">ghc 415000</p>
                </div>

                <div className="h-72 w-72 bg-white  rounded-2xl flex flex-col justify-end items-center pb-12  shadow-md">
                    <div className="bg-foreground/10 h-12 w-12 rounded-md flex justify-center items-center mb-8 self-start ml-16"><FileCheckCorner color="#000000" /></div>
                    <p className="text-md text-black/60 ">PRODUCTS IN STOCK</p>
                    <p className="text-2xl font-bold">{stock}</p>
                </div>

                <div className="h-72 w-72 bg-white  rounded-2xl flex flex-col justify-end items-center pb-12 shadow-md">
                    <div className="bg-foreground/10 h-12 w-12 rounded-md flex justify-center items-center mb-8 self-start ml-16"><ShoppingBag color="#000000" /></div>
                    <p className="text-md text-black/60 ">TOTAL ORDERS</p>
                    <p className="text-2xl font-bold">415</p>
                </div>

                <div className="h-72 w-72 bg-white  rounded-2xl flex flex-col justify-end items-center pb-12 shadow-md">
                    <div className="bg-foreground/10 h-12 w-12 rounded-md flex justify-center items-center mb-8 self-start ml-16"><TriangleAlert color="#000000" /></div>
                    <p className="text-md text-black/60 ">LOW STOCK PRODUCTS</p>
                    <p className="text-2xl font-bold">21</p>
                </div>

            </div>

            <div className="flex gap-8 px-8 pb-10">
                <div className="bg-white min-h-80 w-3/5   rounded-2xl"></div>
                <div className=" bg-foreground/90  w-2/5 min-h-52 border border-black/20 rounded-2xl p-8 space-y-4">
                    <h2 className="text-2xl font-semibold text-white mb-8">Quick Actions</h2>
                    <div className="flex items-center gap-4 border border-white/50 rounded-md px-8 py-4">
                        <SquarePlus color="white" />
                        <span>
                            <p className="text-lg font-medium tracking-tight text-white">Add product</p>
                            <p className="text-sm text-white/50">Upload images and details</p>
                        </span>
                    </div>
                    <div className="flex items-center gap-4 border border-white/50 rounded-md px-8 py-4">
                        <Images color="white" />
                        <span>
                            <p className="text-lg font-medium tracking-tight text-white">Update Hero Section</p>
                            <p className="text-sm text-white/50">Change Homepage banners</p>
                        </span>
                    </div>
                </div>
            </div>
        </>
     );
}

export default Overview;