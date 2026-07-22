import Delivery from "@/components/DeliveryForm";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import api from "@/lib/api";
import { cediSymbol } from "@/lib/utils";
import {ChevronLeft,ChevronRight, FilePenLine} from "lucide-react"
import { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CartContext } from "@/components/Features/ContextProvider";
import { toast } from "sonner";






function Checkout() {
    const [deliveryForm, setDeliveryForm] = useState(false)
    const { cart } = useContext(CartContext)

    const items = cart.map(({_id, name, imageUrl, price, cartQuantity}) => ({
            product : _id,
            name,
            image : imageUrl,
            price,
            quantity : cartQuantity 
        })
    )

    const [formData, setFormData] = useState({
        name : '',
        email : '',
        callNumber : '',
        watsappNumber : '',
        location : ''
    })

    const {state} = useLocation();
    const {subtotal} = state;

    const deliveryfee = 0
    const totalPrice = subtotal + deliveryfee;
    


    const handlePayment = async () => {
        try {
            const resp = await api.post('/api/orders/order', {
                items,
                delivery : formData,
                payment : {
                    method : "mobile_money",
                    amount : totalPrice
                },
                subtotal, 
                deliveryfee,
                total : totalPrice
            } )

            toast.success(resp.data.message, { position : "top-center"}) 
            
            const res =  await api.post('/api/payment/initialize', {
                email : formData.email,
                amount : totalPrice,
                orderId : "resp.data.order._id"
            })
            
            window.location.href = res.data.data.authorization_url

        } catch (error) {
           console.log(error.response?.data);
        }
       
    }

    return ( 
        <>
            <div className="flex justify-start  p-2 bg-background shadow-sm rounded-sm">
                <Link to="/cart"><ChevronLeft/></Link>
                <span className="font-bold text-lg  ml-25">Checkout</span>
            </div>

            <h2 className="font-semibold self-start text-lg mt-2 text-black/80">Delivery to</h2>
            <div className="relative bg-background p-2 shadow-sm rounded-sm">  
                <p className="text-lg font-bold">{formData.name}</p>
                <p className="text-md text-black/50">{formData.email}</p>
                <p className="text-md text-black/50">{formData.callNumber} / {formData.watsappNumber}</p>
                <p className="text-md text-black/50">{formData.location}</p>
                <button className="absolute top-2.5 right-2.5" onClick={() => setDeliveryForm(true)}><FilePenLine /></button>
                {
                   deliveryForm && <Delivery setDeliveryForm = {setDeliveryForm} formData = {formData} setFormData = {setFormData} />
                }
            </div>

            <h2 className="font-semibold self-start text-lg mt-2 text-black/80">Payment Method</h2>
            <div className="mt-1.5 rounded-sm p-2 bg-background shadow-sm ">
                <div className="flex justify-between items-center">
                    <p>Mobile Money</p>
                    <span><img src="/momo-image.jpg" alt="momo-logo"  className="h-10 w-12 rounded-sm"/></span>
                </div>
            </div>

            <h2 className="font-semibold self-start text-lg mt-2 text-black/80">Summary</h2>
            <div className="mt-1.5 rounded-sm p-2 bg-background shadow-sm">
                <p className="flex justify-between border-b p-1.5">Subtotal <span>{cediSymbol} {totalPrice}</span></p>
                <p className="flex justify-between items-center border-b p-1.5">
                    <span>Promo codes</span> 
                    <Drawer>
                        <DrawerTrigger asChild>
                            <span className="flex items-center justify-center font-semibold">Enter<ChevronRight size={16}/></span>
                        </DrawerTrigger>
                        <DrawerContent>
                            <DrawerHeader>
                                <DrawerTitle>Enter Promo Code</DrawerTitle>
                            </DrawerHeader>
                            <div className="p-4 flex flex-col gap-3">
                                <input
                                    type="text"
                                    className="border p-2 rounded-md w-full"
                                    placeholder="enter promo code..."
                                />
                                <button className="w-full bg-black/80 text-white rounded-md py-2 font-semibold">
                                    Apply
                                </button>
                            </div>
                        </DrawerContent>
                    </Drawer>
                    
                </p>
                <p className="flex justify-between border-b p-1.5">Delivery fee <span>000</span></p>
            </div>

            <div className="mt-2 rounded-sm p-2 bg-background shadow-sm">
                <p className="flex justify-between  p-1.5 font-bold">TOTAL TO PAY <span>{cediSymbol} {totalPrice}</span></p>
                <button 
                    className="border w-full rounded-md drop-shadow-sm text-white bg-black/80 p-1.5 mt-3"
                    onClick={handlePayment}
                    type="button"
                >   
                    Proceed to Payment 
                </button>
            </div>


        </>
        
     );
}

export default Checkout;