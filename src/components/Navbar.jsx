import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {

    const[mobileMenu, setMobileMenu]  = useState(false);

    return ( 
       <>
           <nav className="flex relative justify-around items-center z-50 bg-background  font-semibold text-foreground min-h-20 drop-shadow-lg text-base">
                <Link to= "/" className="flex items-center gap-2 hover:bg-muted p-2 rounded-lg">
                    <img src="/logo.svg" className="h-10 w-auto"  alt="prime-access-logo" />
                    <span className="font-bold text-xl leading-none">Prime Access GH</span>
                </Link>
                <ul className="hidden lg:flex lg:gap-12">
                    <li className="bg-muted p-2 rounded-lg hover:bg-muted-foreground hover:text-white"><Link to="/shop?category=ring-lights">Ring Lights</Link></li>
                    <li className="bg-muted p-2 rounded-lg hover:bg-muted-foreground hover:text-white"><Link to="/shop?category=data-cables">Charging Chords</Link></li>
                    <li className="bg-muted p-2 rounded-lg hover:bg-muted-foreground hover:text-white"><Link to="/shop?category=computer-pads">Computer Pads</Link></li>
                </ul>
                <ul className="hidden lg:flex lg:gap-12">
                    <li className="bg-muted p-2 rounded-lg hover:bg-muted-foreground hover:text-white "><Link to="/about">About us</Link></li>
                    <li className="bg-muted p-2 rounded-lg hover:bg-muted-foreground hover:text-white"><Link to="/contact">Contact us</Link></li>
                </ul>
                <button
                    className="lg:hidden block cursor-pointer p-2"
                    onClick={() => {setMobileMenu(!mobileMenu)}}
                >
                    {mobileMenu ? <X size={28}/> : <Menu size={28} />}
                </button>
            </nav>
    
             <div className={`lg:hidden fixed top-20 left-0 w-full bg-background shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${
                mobileMenu ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
                }`}>
            <ul className="flex flex-col items-center gap-1 py-2 font-semibold text-base">
                <li className="list-none w-full text-center p-2 hover:bg-muted transition-all cursor-pointer">
                    <Link to="/shop?category=ring-lights" onClick={() => setMobileMenu(false)}>Ring Lights</Link>
                </li>
                <li className="list-none w-full text-center p-2 hover:bg-muted transition-all cursor-pointer">
                    <Link to="/shop?category=data-cables" onClick={() => setMobileMenu(false)}>Charging Chords</Link>
                </li>
                <li className="list-none w-full text-center p-2 hover:bg-muted transition-all cursor-pointer">
                    <Link to="/shop?category=computer-pads" onClick={() => setMobileMenu(false)}>Computer Pads</Link>
                </li>
                <li className="list-none w-full text-center p-2 hover:bg-muted transition-all cursor-pointer border-t mt-2">
                    <Link to="/about" onClick={() => setMobileMenu(false)}>About us</Link>
                </li>
                <li className="list-none w-full text-center p-2 hover:bg-muted transition-all cursor-pointer">
                    <Link to="/contact" onClick={() => setMobileMenu(false)}>Contact us</Link>
                </li>
            </ul>
        </div>
       </>
    );
}

export default Navbar;