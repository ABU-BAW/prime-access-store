import { Link, useSearchParams } from 'react-router-dom'

const categories = [
    {
        label: "Storage Devices",
        value: "storage-devices",
        image: "/ssdt.jpg",
    },
    {
        label: "Ring Lights",
        value: "ring-lights",
        image: "/rt.jpg",
    },
    {
        label: "Tripod Stands",
        value: "tripod-stands",
        image: "/ups.jpg",
    },
    {
        label: "Computer Pads",
        value: "computer-pads",
        image: "/cd.jpg",
    },
]

function Category() {
    const [searchParams] = useSearchParams()
    const activeCategory = searchParams.get('category')
    
    return ( 
        <section className="py-6 px-4 bg-white">
            <h2 className="text-xl sm:text-2xl font-bold text-center mb-4 text-gray-900">
                Shop by Category
            </h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
                {categories.map((cat) => (
                    <Link 
                        key={cat.value} 
                        to={`/shop?category=${cat.value}`}
                        className="group"
                    >
                        <div className={`bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                            activeCategory === cat.value 
                                ? 'ring-2 ring-black' 
                                : 'hover:ring-1 hover:ring-gray-300'
                        }`}>
                            {/* Square Image */}
                            <div className="relative w-full aspect-square overflow-hidden bg-gray-100">
                                <img 
                                    src={cat.image} 
                                    alt={cat.label} 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                                />
                            </div>
                            
                            {/* Label Only - Very compact */}
                            <div className="p-2 sm:p-3 text-center bg-white">
                                <h3 className="font-semibold text-xs sm:text-sm text-gray-900 leading-tight">
                                    {cat.label}
                                </h3>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}

export default Category;