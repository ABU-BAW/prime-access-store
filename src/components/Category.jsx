import { Link } from 'react-router-dom'

const categories = [
    {
        id : 1,
        label : "storage-devices",
        categoryName: "Storage Devices",
        categoryImage: "/ssdt.jpg",
        callToAction: ( <p>Shop Now →</p> ),
    },
    {
        id : 2,
        label : "ring-lights",
        categoryName: "Ring Lights",
        categoryImage: "/ringlights.jpg",
        callToAction: ( <p>Shop Now →</p> )
    },
    {
        id : 3,
        label : "tripod-stands",
        categoryName: "Tripod Stands",
        categoryImage: "/tripodstands.jpg",
        callToAction: ( <p>Shop Now →</p> )
    },
    {
        id : 4,
        label : "mouse-pads",
        categoryName: "Mouse pads",
        categoryImage: "/mousepad.jpg",
        callToAction: ( <p>Shop Now →</p> )
    },
]

function Category() {
    
    return ( 
        <section className=" bg-background flex flex-col mb-4">
            <h2 className="text-xl font-bold text-center tracking-tight text-gray-900">
                Shop by Category
            </h2>

            <p className='text-xs  text-black self-center mb-1'>Explore  collections</p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl w-full ">
                {
                    categories.map(category => (
                        <Link
                            key={category.id}
                            to={`/shop/${category.label}`}
                        >
                            <div
                                className="relative h-28 rounded-lg overflow-hidden w-full bg-cover bg-center p-2.5"
                                style={{backgroundImage: `url(${category.categoryImage})`}}
                            >
                                <div className='absolute inset-0 bg-black/50'></div>
                                <div className='relative z-10 h-full justify-end flex flex-col gap-0.5'>
                                    <h3 className='text-sm font-semibold tracking-tight text-white'>{category.categoryName}</h3>
                                    <p className='text-xs text-white'>{category.callToAction}</p>
                                </div>

                            </div>
                        </Link>
                    ))
                }
            </div>
        </section>
    );
}

export default Category;