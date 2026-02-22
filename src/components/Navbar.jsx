import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [mobileMenuOpen, setmobileMenuOpen] = useState(false);

    return ( 
       <nav className="flex  justify-around items-center  bg-background  font-semibold text-foreground min-h-20 drop-shadow-lg text-base">
            <Link to= "/" className="flex items-center gap-2 hover:bg-muted p-2 rounded-lg">
                <img src="/logo.svg" className="h-10 w-auto"  alt="prime-access-logo" />
                <span className="font-bold text-xl leading-none">Prime Access GH</span>
            </Link>
            {/* new */}
            <button
                onClick={() => setmobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 hover:bg-muted rounded-lg"
                aria-label="Toggle menu"
            >
                {mobileMenuOpen ? (
                        // X icon
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        // Hamburger icon
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
            </button>
            <ul className="flex gap-12">
                <li className="bg-muted p-2 rounded-lg hover:bg-muted-foreground hover:text-white"><Link to="/shop?category=ring-lights">Ring Lights</Link></li>
                <li className="bg-muted p-2 rounded-lg hover:bg-muted-foreground hover:text-white"><Link to="/shop?category=data-cables">Charging Chords</Link></li>
                <li className="bg-muted p-2 rounded-lg hover:bg-muted-foreground hover:text-white"><Link to="/shop?category=computer-pads">Computer Pads</Link></li>
            </ul>
            <ul className="flex gap-12">
                <li className="bg-muted p-2 rounded-lg hover:bg-muted-foreground hover:text-white "><Link to="/about">About us</Link></li>
                <li className="bg-muted p-2 rounded-lg hover:bg-muted-foreground hover:text-white"><Link to="/contact">Contact us</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;