import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";



export default function CheckAuth(){
    
    const [status, setStatus] = useState('checking')
    
    useEffect(() => {
        fetch("http://localhost:5000/api/admin/check-auth", { credentials : "include" })

        .then((res) => setStatus(res.ok ? "auth" : "unauth") )
        .catch(() => setStatus("unauth"));
    }, [])

    if (status === "checking") return <p>Loading...</p>;
    if (status === "unauth") return <Navigate to="/admin/auth/login" replace />;

    return <Outlet />

}