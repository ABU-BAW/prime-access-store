import { useNavigate } from "react-router-dom";




function OrderSuccess() {

    const navigate = useNavigate();

    return ( 
        <div className="flex flex-col items-center justify-center min-h-screen gap-4">
            <h1 className="text-2xl font-bold">Order Placed!</h1>
            <p className="text-muted-foreground">Thank you for your purchase. We'll contact you shortly.</p>
            <button 
                onClick={() => navigate("/")}
                className="bg-black/80 text-white px-6 py-2 rounded-md">
                Continue Shopping
            </button>
        </div>
     );
}

export default OrderSuccess;