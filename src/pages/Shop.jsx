import Category from "@/components/Category";
import Listing from "@/components/Featured";
import { products } from "@/data/products";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";



function Shop() {
    const [searchParams] = useSearchParams()
    const category = searchParams.get('category') // gets "ring-lights" or null

    // Filter products if category exists, otherwise show all
    const filteredProducts = category
        ? products.filter((p) => p.category === category)
        : products

    // Format category name for display
    const categoryTitle = category
        ? category.replace(/-/g, ' ') // "ring-lights" → "ring lights"
        : 'All Products'

    return (
        <section className="bg-background my-4">
            {/* Category Title Banner */}
            <div className="px-8 py-6 border-b border-foreground/10 flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold capitalize">{categoryTitle}</h2>
                    <p className="text-foreground/50 text-sm mt-1">
                        {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
                    </p>
                </div>

                {/* Show "Clear Filter" button when filtering */}
                {category && (
                    <Link
                        to="/shop"
                        className="text-sm font-semibold border-2 border-black px-4 py-2 rounded-lg hover:bg-black hover:text-white transition-colors"
                    >
                        Clear Filter ✕
                    </Link>
                )}
            </div>

            <Category />

            {/* Show filtered products or empty state */}
            {filteredProducts.length > 0 ? (
                <Listing products={filteredProducts} />
            ) : (
                <div className="flex flex-col items-center justify-center py-24 gap-4">
                    <p className="text-2xl font-bold">No products found</p>
                    <p className="text-foreground/50">
                        No products in the "{categoryTitle}" category yet.
                    </p>
                    <Link
                        to="/shop"
                        className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-black/90 transition-colors"
                    >
                        View All Products
                    </Link>
                </div>
            )}
        </section>
    )
}

export default Shop

