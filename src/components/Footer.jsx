import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";


function Footer() {
  return ( 
    <footer className="bg-background text-foreground lg:min-h-[35%]"> 
      <div className="container mx-auto px-10 lg:px-30 py-8 border lg:text-5xl">
        <div className="grid grid-cols-2 lg:flex lg:justify-between gap-8 pb-12 ">

          <div className="space-y-2 ">
            <div className="flex items-center gap-2">
              <Link to="/"><img src="/logo.svg" className="h-7 w-auto" alt="Prime Access GH Logo"/></Link>
              <span className="text-sm font-bold leading-tight">Prime Access GH</span>
            </div>
            
            <p className="text-foreground/70  leading-relaxed text-xs">
              Your Premium destination for all tech accessories and electronics for professionals.<br /> 
              Quality products that last a lifetime
            </p>

            <div className="flex gap-3 mt-5">
              <a 
                href="https://www.facebook.com/profile.php?id=61587904483235" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-6 h-5 rounded-full bg-background hover:bg-black hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebook  />
              </a>

              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-6 h-5 rounded-full bg-background hover:bg-black hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>

              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-6 h-5 rounded-full bg-background hover:bg-black hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
 
          <div className="space-y-2 ml-4">
            <h3 className="text-sm font-bold  tracking-wider">
              Shop
            </h3>
            
            <ul className="text-foreground/70 text-xs">
              <li className="mb-1">  
                <Link to="/shop/computer-battries">Computer Battries</Link> 
              </li>
              <li className="mb-1"> 
                <Link to="/shop/laptop-stands">Laptop Stands</Link> 
              </li>
              <li className="mb-1"> 
                <Link to="/shop/ring-lights">Ring Lights</Link> 
              </li>
              <li>   
                <Link to="/shop">All Products</Link> 
              </li> 
            </ul>
          </div> 
          
          <div className="space-y-2 ">
            <h3 className="text-sm font-bold  tracking-wider">
              Company
            </h3>
            
            <ul className="space-y-2 text-foreground/80 text-xs">

              <li className="mb-1">
                <Link to="/about">About Us</Link>
              </li>

              <li className="mb-1">
                <Link to="/contact">Contact</Link>
              </li>

              <li className="mb-1">
                <Link to="/company/careers">Careers</Link>
              </li>
            </ul>
              
          </div>

          <div className="space-y-2 ml-4">
            <h3 className="text-sm font-bold  tracking-wider">
              Support
            </h3>

            <ul className="space-y-2 text-foreground/80 text-xs">
              <li className="mb-1">
                <Link to="/support/help">Our Delivery Terms</Link>
              </li>
              <li className="mb-1">
                <Link to="/support/delivery">Help Center</Link>
              </li>
              <li className="mb-1">
                <Link to="/support/returns">Returns</Link>
              </li>
            </ul>
          </div>

        </div>
      </div>

      <div className="border-t border-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-foreground/60 text-xs">
            © {new Date().getFullYear()} Prime Access GH. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;