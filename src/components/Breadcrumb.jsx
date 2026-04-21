import { Link, useLocation } from "react-router-dom";

function Breadcrumb() {
    const { pathname } = useLocation();
    
    const segments = pathname.split("/").filter(Boolean);

    return (
        <nav className="flex items-center gap-1 text-sm text-muted-foreground ">
            <Link to="/" className="hover:text-foreground">Home</Link>
            
            {segments.map((segment, index) => {
               
                const path = "/" + segments.slice(0, index + 1).join("/");
                const isLast = index === segments.length - 1;
                
                return (
                    <span key={path} className="flex items-center gap-1">
                        <span>/</span>
                        {isLast ? (
                            <span className="text-foreground font-medium">{segment}</span>
                        ) : (
                            <Link to={path} className="hover:text-foreground">{segment}</Link>
                        )}
                    </span>
                );
            })}
        </nav>
    );
}

export default Breadcrumb;