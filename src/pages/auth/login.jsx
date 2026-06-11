import { useState } from "react";
import { loginFormControls } from "@/config";
import { Link, useNavigate } from "react-router-dom";
import CommonForm from "../../common/form";
import axios from "axios";


const initialFormData = {
    email : '',
    password : ''
}

function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState(initialFormData);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

  async  function onSubmit (event){
        event.preventDefault();
        setLoading(true); 
        setError("");

        try {

            await axios.post('http://localhost:5000/api/admin/login', formData,  { withCredentials: true })
            
            navigate('/admin/overview');
        } catch (error) {
            setError(error.response?.data?.message || "Something went wrong.")
        }
    }

    return ( 
        <div className="mx-auto w-full max-w-md space-y-6">
            <div className="text-center">
                <h1 className="text-3xl tracking-tight font-bold text-foreground">Log into Account</h1>
                <p>
                    Don't have an account
                    <Link to= "/admin/auth/register"  className="font-semibold text-primary ml-2 hover:underline">Register</Link>
                </p>
            </div>

            {error && (
                <p className="rounded-lg bg-red-50 px-4 py-2 text-center text-sm text-red-500">
                    {error}
                </p>
            )}
                <CommonForm 
                    formControls = {loginFormControls}
                    buttonText = {'Sign In'}
                    formData = {formData}
                    setFormData ={setFormData}
                    onSubmit = {onSubmit}
                />
        </div>
     );
}

export default Login;