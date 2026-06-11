import { Outlet } from "react-router-dom";



function AuthLayout() {
    return ( 
        <div className="flex flex-col  items-center  min-h-screen w-full">
            <h1 className="font-bold text-5xl mt-20 tracking-wider text-black/65">Welcome to work admin!!</h1>
            <div className=" mt-10 w-1/2 ">
                <Outlet />
            </div>
        </div>
     );
}

export default AuthLayout;