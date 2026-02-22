import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { products } from "../data/products";

function ProductDescription() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);
    const [activeImage, setActiveImage] = useState(0);

    const product = products.find((p) => p.id === Number(id));

    // Placeholder thumbnail images - replace with real product images
    const images = [
        product?.image || "/lct.jpg",
        "/lct.jpg",
        "/lct.jpg",
        "/lct.jpg",
    ];

    if (!product) {
        return (
            <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-4">
                <h2 className="text-3xl font-bold">Product not found</h2>
                <Button
                    className="bg-black text-white hover:bg-black/90"
                    onClick={() => navigate("/shop")}
                >
                    Back to Shop
                </Button>
            </div>
        );
    }

    // WhatsApp order link
    const phoneNumber = "233599428820"; // rakiba's number  number
    const whatsappMessage = encodeURIComponent(
        `Hello Prime Access GH! 👋\n\nI want to order:\n\n🛒 Product: ${product.name}\n📦 Quantity: ${quantity}\n💵 Price: $${product.price} each\n💰 Total: $${(product.price * quantity).toFixed(2)}\n\nPlease confirm availability and delivery details. Thank you!`
    );
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

    const incrementQty = () => setQuantity((prev) => prev + 1);
    const decrementQty = () => setQuantity((prev) => Math.max(1, prev - 1));

    return (
        <div className="min-h-screen bg-background">
            {/* Breadcrumb */}
            <div className="bg-muted border-b border-foreground/10">
                <div className="container mx-auto px-8 py-3">
                    <nav className="flex items-center gap-2 text-sm text-foreground/60">
                        <Link to="/" className="hover:text-black transition-colors">
                            Home
                        </Link>
                        <span>/</span>
                        <Link to="/shop" className="hover:text-black transition-colors">
                            Shop
                        </Link>
                        <span>/</span>
                        <span className="text-black font-medium capitalize">{product.name}</span>
                    </nav>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Left - Image Gallery */}
                    <div className="space-y-4 lg:sticky lg:top-8">
                        {/* Main Image */}
                        <div className="relative bg-muted rounded-2xl overflow-hidden aspect-square shadow-lg group">
                            <img
                                src={images[activeImage]}
                                alt={product.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            {/* Product badge */}
                            <div className="absolute top-4 left-4 bg-black text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                In Stock
                            </div>
                        </div>

                        {/* Thumbnail Strip */}
                        <div className="grid grid-cols-4 gap-3">
                            {images.map((img, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveImage(index)}
                                    className={`relative bg-muted rounded-xl overflow-hidden aspect-square transition-all duration-200 ${
                                        activeImage === index
                                            ? "ring-2 ring-black scale-95"
                                            : "hover:ring-2 hover:ring-black/30 hover:scale-95"
                                    }`}
                                >
                                    <img
                                        src={img}
                                        alt={`${product.name} view ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right - Product Info */}
                    <div className="space-y-8">
                        {/* Product Title & Price */}
                        <div className="space-y-3">
                            <p className="text-sm font-semibold tracking-widest uppercase text-foreground/50">
                                Prime Access GH
                            </p>
                            <h1 className="text-4xl font-bold leading-tight capitalize">
                                {product.name}
                            </h1>
                            <div className="flex items-baseline gap-3 pt-2">
                                <span className="text-4xl font-bold">${product.price}</span>
                                <span className="text-foreground/40 text-lg line-through">
                                    ${Math.round(product.price * 1.2)}
                                </span>
                                <span className="text-sm font-semibold bg-black text-white px-2 py-1 rounded-md">
                                    20% OFF
                                </span>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="border-t border-foreground/10" />

                        {/* Description */}
                        <div className="space-y-3">
                            <h3 className="font-semibold text-lg">About This Product</h3>
                            <p className="text-foreground/70 leading-relaxed">
                                The {product.name} is a premium quality tech accessory built for
                                professionals and everyday users alike. Engineered for durability,
                                performance, and reliability — this is the last {product.name.split(" ")[0]} you'll
                                ever need to buy.
                            </p>
                            <p className="text-foreground/70 leading-relaxed">
                                Sourced directly from trusted manufacturers, every unit goes
                                through quality checks before reaching your hands.
                            </p>
                        </div>

                        {/* Key Features */}
                        <div className="space-y-3">
                            <h3 className="font-semibold text-lg">Key Features</h3>
                            <div className="grid grid-cols-1 gap-2">
                                {[
                                    "Premium build quality",
                                    "12-month warranty included",
                                    "Fast delivery across Accra",
                                    "Tested & quality assured",
                                    "After-sales support available",
                                ].map((feature) => (
                                    <div key={feature} className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center shrink-0">
                                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="text-foreground/80 text-sm">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="border-t border-foreground/10" />

                        {/* Quantity Selector */}
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <h3 className="font-semibold text-lg">Quantity</h3>
                                <span className="text-foreground/50 text-sm">
                                    Total:{" "}
                                    <span className="text-black font-bold text-base">
                                        ${(product.price * quantity).toFixed(2)}
                                    </span>
                                </span>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="flex items-center border-2 border-black rounded-full overflow-hidden">
                                    <button
                                        onClick={decrementQty}
                                        className="w-12 h-12 flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-200 text-xl font-bold"
                                        aria-label="Decrease quantity"
                                    >
                                        −
                                    </button>
                                    <span className="w-12 text-center font-bold text-lg">
                                        {quantity}
                                    </span>
                                    <button
                                        onClick={incrementQty}
                                        className="w-12 h-12 flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-200 text-xl font-bold"
                                        aria-label="Increase quantity"
                                    >
                                        +
                                    </button>
                                </div>

                                <span className="text-foreground/50 text-sm">
                                    Minimum order: 1 unit
                                </span>
                            </div>
                        </div>

                        {/* Order Now Button - WhatsApp */}
                        <a
                            href={whatsappURL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 w-full bg-black text-white py-5 rounded-2xl text-lg font-bold hover:bg-black/90 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group"
                        >
                            {/* WhatsApp Icon */}
                            <svg
                                className="w-6 h-6 transition-transform group-hover:scale-110"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                            Order Now via WhatsApp
                        </a>

                        {/* Delivery Info Strip */}
                        <div className="grid grid-cols-3 gap-4 pt-2">
                            {[
                                {
                                    icon: (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                                        </svg>
                                    ),
                                    label: "Fast Delivery",
                                    sub: "Accra & nearby",
                                },
                                {
                                    icon: (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    ),
                                    label: "Warranty",
                                    sub: "12 months",
                                },
                                {
                                    icon: (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                    ),
                                    label: "Support",
                                    sub: "Always available",
                                },
                            ].map((item) => (
                                <div
                                    key={item.label}
                                    className="flex flex-col items-center text-center gap-2 bg-muted rounded-xl p-4"
                                >
                                    <div className="text-black">{item.icon}</div>
                                    <span className="text-xs font-bold">{item.label}</span>
                                    <span className="text-xs text-foreground/50">{item.sub}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Product Details Tabs - Info & Delivery only */}
                <div className="mt-20 border-t border-foreground/10 pt-12">
                    <ProductTabs product={product} />
                </div>

                {/* You May Also Like */}
                <div className="mt-20">
                    <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {products
                            .filter((p) => p.id !== product.id)
                            .slice(0, 4)
                            .map((p) => (
                                <Link
                                    key={p.id}
                                    to={`/shop/${p.id}`}
                                    className="group block bg-muted rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div className="aspect-square overflow-hidden">
                                        <img
                                            src="/lct.jpg"
                                            alt={p.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-4 space-y-1">
                                        <p className="font-semibold text-sm capitalize line-clamp-2">{p.name}</p>
                                        <p className="font-bold">${p.price}</p>
                                    </div>
                                </Link>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

// Product Tabs Component (Info + Delivery only)
function ProductTabs({ product }) {
    const [activeTab, setActiveTab] = useState("info");

    const tabs = [
        { id: "info", label: "Product Info" },
        { id: "delivery", label: "Delivery & Returns" },
    ];

    return (
        <div>
            {/* Tab Headers */}
            <div className="flex gap-0 border-b-2 border-foreground/10">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-8 py-4 text-base font-semibold transition-all duration-200 border-b-2 -mb-0.5 ${
                            activeTab === tab.id
                                ? "border-black text-black"
                                : "border-transparent text-foreground/50 hover:text-black"
                        }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="py-8 max-w-3xl">
                {activeTab === "info" && (
                    <div className="space-y-6">
                        <p className="text-foreground/70 leading-relaxed">
                            The {product.name} is designed for professionals who demand the best
                            from their tech accessories. Built with premium materials and
                            rigorous quality control, this product delivers consistent
                            performance across all use cases.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { label: "Brand", value: "Prime Access GH" },
                                { label: "Category", value: "Tech Accessories" },
                                { label: "Warranty", value: "12 Months" },
                                { label: "Availability", value: "In Stock" },
                                { label: "Condition", value: "Brand New" },
                                { label: "Origin", value: "Manufacturer Direct" },
                            ].map((spec) => (
                                <div
                                    key={spec.label}
                                    className="flex justify-between items-center py-3 border-b border-foreground/10"
                                >
                                    <span className="text-foreground/50 text-sm">{spec.label}</span>
                                    <span className="font-semibold text-sm">{spec.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === "delivery" && (
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <div className="flex gap-4 p-4 bg-muted rounded-xl">
                                <svg className="w-6 h-6 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                                </svg>
                                <div>
                                    <p className="font-bold">Standard Delivery</p>
                                    <p className="text-foreground/60 text-sm mt-1">
                                        Delivered within 1-3 business days across Accra and surrounding areas. 
                                        Delivery fee applies based on your location.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 p-4 bg-muted rounded-xl">
                                <svg className="w-6 h-6 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                                <div>
                                    <p className="font-bold">Same Day Delivery</p>
                                    <p className="text-foreground/60 text-sm mt-1">
                                        Available for orders placed before 12PM within Accra. 
                                        Contact us via WhatsApp to arrange same-day delivery.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 p-4 bg-muted rounded-xl">
                                <svg className="w-6 h-6 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z" />
                                </svg>
                                <div>
                                    <p className="font-bold">Returns Policy</p>
                                    <p className="text-foreground/60 text-sm mt-1">
                                        We accept returns within 7 days of delivery for defective 
                                        or damaged items. Item must be in original packaging. 
                                        Contact us on WhatsApp to initiate a return.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProductDescription;