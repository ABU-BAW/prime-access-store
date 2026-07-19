import api from "@/lib/api";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";




function VerifyPayment() {

    const [searchParams] = useSearchParams()
    const reference = searchParams.get("reference");
    const navigate = useNavigate();

    useEffect(() => {

        const verify = async () => {

            try {
                
                const res = await api.get(`/api/payment/verify/${reference}`)
                if(res.data.status === 'success')
                {
                    navigate("/order-success");
                }

            } catch (error) {
                console.log(error);
            }
           
        }
        verify();
    },[])

    return ( 
        <div>Verifying Payment....</div>
     );
}

export default VerifyPayment;