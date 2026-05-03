import { Link } from 'react-router-dom'
import { products } from '@/data/products';

function Category() {

    const category = products.slice(0, 4);
     
    return ( 
        <section className=" bg-muted flex flex-col mb-2 ">
            <h2 className="text-xl font-bold text-center tracking-tight text-gray-900  lg:mt-3 lg:leading-relaxed">
                Shop by Category
            </h2>

            <p className='text-xs  text-foreground/50 self-center mb-4'>Explore curated collections</p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 w-full">
                {
                    category.map(product => (
                        <Link
                            key={product.id} 
                            to={`/shop/${product.slug}`}
                        >
                            <div
                                className="relative h-28 lg:h-40 rounded-lg overflow-hidden w-full bg-cover bg-center p-2.5"
                                style={{backgroundImage: `url(${product.image})`}}
                            >
                                <div className='absolute inset-0 bg-black/50'></div>
                                <div className='relative z-10 h-full justify-end flex flex-col gap-0.5'>
                                    <h3 className='text-sm font-semibold tracking-tight text-white'>{product.category}</h3>
                                    <p className='text-xs text-white'>Shop Now →</p>
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