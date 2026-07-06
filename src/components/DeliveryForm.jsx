import { useState } from "react";



function Delivery({setDeliveryForm, formData, setFormData}) {


    return ( 
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-background w-[90%] max-w-md rounded-lg p-4">
                <h2 className="font-semibold text-lg mb-4">Delivery Details</h2>
                <form  className="w-full">
                   <p className="flex flex-col space-y-2 mb-2">
                       <label className="font-semibold">Name</label>
                       <input
                        className="border p-1.5"
                        type="text"
                        value={formData.name}
                        placeholder="enter your name.."
                        onChange={(e) => setFormData({...formData, name : e.target.value})}
                        />
                   </p>
                   <p className="flex flex-col space-y-2 mb-2">
                       <label className="font-semibold">Call Number</label>
                       <input
                        className="border p-1.5"
                        type="tel"
                        placeholder="your normal phone number..."
                        value={formData.callNumber}
                        onChange={(e) => setFormData({...formData, callNumber : e.target.value})}
                        />
                   </p>
                   <p className="flex flex-col space-y-2 mb-2">
                       <label className="font-semibold">Watsapp Number</label>
                       <input
                        className="border p-1.5"
                        type="text"
                        placeholder="your watsapp number"
                        value={formData.watsappNumber}
                        onChange={(e) => setFormData({...formData, watsappNumber : e.target.value})}
                        />
                   </p>
                   <p className="flex flex-col space-y-2 mb-2">
                       <label className="font-semibold">location</label>
                       <input
                        className="border p-1.5"
                        type="text"
                        placeholder="e.g..Greater Accra, oyarifa ghana flag"
                        value={formData.location}
                        onChange={(e) => setFormData({...formData, location : e.target.value})}
                        />
                   </p>
                   <button 
                        onClick={() =>setDeliveryForm(false) } 
                        className="w-full border rounded-md bg-black/80 text-white font-semibold py-1 mt-4"
                        type="button"
                    >
                        Cancel
                    </button>
                   <button 
                        onClick={() =>setDeliveryForm(false) } 
                        className="w-full border rounded-md bg-black/80 text-white font-semibold mt-2 py-1"
                        type="button"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
     );
}



export default Delivery;