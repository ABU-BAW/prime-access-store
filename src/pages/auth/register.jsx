import CommonForm from "../../common/form";
import { registerFormControls } from "@/config";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
 
const initialFormData = {
    username : '',
    email : '', 
    password : '',
}

function Register() {

    const navigate = useNavigate();
    const [formData, setFormData] = useState(initialFormData)
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    async function onSubmit(event) {
        event.preventDefault();
        setLoading(true);
        setError("");

        try {

            await axios.post('http://localhost:5000/api/admin/register', formData)
            
            navigate('/admin/auth/login');
            
        } catch (error) {
            setError(error.response?.data?.message || "Something went wrong.")
        }
    }
    

    return ( 
        <div className="mx-auto w-full max-w-md space-y-6">
            <div className="text-center">
                <h1 className="text-3xl tracking-tight font-bold text-foreground">Create an Account</h1>
                <p>
                    Already have an account 
                    <Link to= "/admin/auth/login"  className="font-semibold text-primary ml-2 hover:underline">Login</Link>
                </p>
            </div>
                <CommonForm 
                    formControls = {registerFormControls}
                    buttonText = {'Sign Up'}
                    formData = {formData}
                    setFormData ={setFormData}
                    onSubmit = {onSubmit}
                />
        </div>
     );
}

export default Register;