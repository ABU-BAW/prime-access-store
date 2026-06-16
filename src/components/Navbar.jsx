import { Menu, X, Search, CircleDotDashed, Mouse, Camera, HardDrive, Cable, Frame, ChevronRight, Headset, Info, PhoneCall } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "./ui/input";

function Navbar() {

    const[mobileMenu, setMobileMenu]  = useState(false);
    const categories = [
        {
            name : 'Ring Lights',
            icon : (<CircleDotDashed absoluteStrokeWidth/>),
            id  : 1
        }, 
        {
            name : 'Gaming Mouse',
            icon : (<Mouse  absoluteStrokeWidth/> ),
             id  : 2
        },
        {
            name : 'Pendrives',
            icon : (<HardDrive  absoluteStrokeWidth/>),
             id  : 3

        },
        {
            name : 'Data Cables',
            icon : (<Cable  absoluteStrokeWidth/>),
            id  : 4
        },
        {
            name : 'Mouse Pads',
            icon : (<Frame  absoluteStrokeWidth/>),
            id  : 5
        },
        {
            name : 'Cameras',
            icon : (<Camera  absoluteStrokeWidth/>),
            id  : 6
        },
    ]
    return ( 
       <header className="shrink-0">
           <nav className="flex fixed right-0 left-0 top-0 justify-around items-center z-50 bg-background  font-semibold text-foreground h-20 drop-shadow-lg text-base">
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
    
            <div className={`lg:hidden fixed top-20 left-0 px-4  pt-4  w-3/4 h-[calc(100vh-5rem)] bg-background shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${
                mobileMenu ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0 pointer-events-none"
            }`}>
                <div className="relative ">
                    <Input
                        type="search"
                        placeholder="Search products..."
                        className="pl-10"
                    >
                    </Input >
                    <Search className="absolute top-1/2 transform -translate-y-1/2  left-2"/>
                </div>

                <h3 className="font-semibold tracking-wider text-lg mt-6 mb-4">EXPLORE</h3>
                {
                    categories.map(category => ( <div key={category.id} className="flex items-center justify-between min-h-12 pl-1 hover:cursor-pointer hover:bg-muted text-md text-black/60 ">
                        <div className="flex items-center  gap-4">
                            {category.icon}
                            <span>{category.name}</span>
                        </div>
                        <span><ChevronRight /></span>
                    </div> ))
                }
                <ul className="mt-6 border-t pt-4 text-black/60 text-md">
                    <li className=" list-none">
                        <Link to="#" onClick={() => setMobileMenu(false)}  className="flex justify-between list-none gap-4 items-center hover:cursor-pointer hover:bg-muted min-h-12 pl-1">
                            <div className="flex gap-4 items-center">
                                <Headset  absoluteStrokeWidth />
                                Help & Support
                            </div>
                            <span><ChevronRight /></span>
                        </Link>
                    </li>
                    <li className="list-none">
                        <Link to= "/about" onClick={() => setMobileMenu(false)} className="flex justify-between list-none gap-4 items-center hover:cursor-pointer hover:bg-muted min-h-12 pl-1">
                            <div className="flex gap-4 items-center">
                                <Info  absoluteStrokeWidth/>
                                About Us
                            </div>
                            <span><ChevronRight /></span>
                        </Link>
                    </li>
                    <li className="list-none ">
                        <Link to= "/contact" onClick={() => setMobileMenu(false)} className="flex justify-between list-none gap-4 items-center hover:cursor-pointer hover:bg-muted min-h-12 pl-1" >
                            <div className="flex gap-4 items-center">
                                <PhoneCall   absoluteStrokeWidth/>
                                Contact
                            </div>
                            <span><ChevronRight /></span>
                        </Link>
                    </li>
                </ul>
                {/* <ul className="flex flex-col items-center gap-1 py-2 font-semibold text-base">
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
                        
                    </li>
                    <li className="list-none w-full text-center p-2 hover:bg-muted transition-all cursor-pointer">
                        <Link to="/contact" onClick={() => setMobileMenu(false)}>Contact us</Link>
                    </li>
                </ul> */}
            </div>
       </header>
    );
}

export default Navbar;