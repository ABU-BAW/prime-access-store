import { Link, useSearchParams } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const categories = [
    {
        label: "Storage Devices",
        value: "storage-devices",
        image: "/ssdt.jpg",
        description: "Flash drives, HDDs and SSDs for your digital load"
    },
    {
        label: "Ring Lights",
        value: "ring-lights",
        image: "/rt.jpg",
        description: "Professional lighting for content creators"
    },
    {
        label: "Tripod Stands",
        value: "tripod-stands",
        image: "/ups.jpg",
        description: "Sturdy stands for cameras and accessories"
    },
    {
        label: "Computer Pads",
        value: "computer-pads",
        image: "/cd.jpg",
        description: "Mouse pads and desk mats for every setup"
    },
]

function Category() {
    const [searchParams] = useSearchParams()
    const activeCategory = searchParams.get('category')

    return ( 
        <>
            <h1 className="text-xl font-bold text-center pt-2">Shop by Category</h1>
            <div className="grid grid-cols-1 mb-4 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4">
                {categories.map((cat) => (
                    <Link 
                        key={cat.value} 
                        to={`/shop?category=${cat.value}`}
                    >
                        <Card className={`overflow-hidden py-0 bg-muted transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                            activeCategory === cat.value 
                                ? 'ring-2 ring-black' // Highlighted when active
                                : ''
                        }`}>
                            <img 
                                src={cat.image} 
                                alt={cat.label} 
                                className="w-full object-cover h-40 border-b" 
                            />
                            <CardHeader className="pb-2">
                                <CardTitle className="text-lg font-semibold">
                                    {cat.label}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-foreground/60 text-sm">{cat.description}</p>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </>
    );
}

export default Category;