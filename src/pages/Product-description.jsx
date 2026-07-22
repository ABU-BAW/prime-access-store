import { useState } from "react";
import { ChevronLeft, ChevronRight, ChevronDown, Truck, RotateCcw, ShieldCheck } from "lucide-react";

// ── Mock product data (replace with your real API fetch) ──────────────────────
const product = {
  name: "Anker 7-in-1 USB-C Hub",
  images: [
    "https://placehold.co/400x400/111/fff?text=Image+1",
    "https://placehold.co/400x400/222/fff?text=Image+2",
    "https://placehold.co/400x400/333/fff?text=Image+3",
    "https://placehold.co/400x400/444/fff?text=Image+4",
  ],
  oldPrice: 120,
  newPrice: 95,
  discount: 21,
  variants: {
    Color: ["Black", "Silver", "White"],
    Size: ["Standard", "Pro"],
  },
  description:
    "The Anker 7-in-1 USB-C Hub expands your laptop's connectivity with 4K HDMI, fast charging, and multiple USB ports. Compact, lightweight, and built to last — ideal for work, school, or travel.",
  specs: [
    { key: "Material", value: "Aluminum Alloy" },
    { key: "Ports", value: "7-in-1" },
    { key: "Max Output", value: "100W PD" },
    { key: "Cable Length", value: "30cm" },
    { key: "Weight", value: "95g" },
  ],
  delivery: "Greater Accra — 1–2 business days",
};

function Productdetail() {
  const [current, setCurrent] = useState(0);
  const [selectedVariants, setSelectedVariants] = useState({});
  const [region, setRegion] = useState("");
  const [location, setLocation] = useState(false);
  const [showDescriptionDetails, setShowDescriptionDetails] = useState(false)

  const prev = () => setCurrent((c) => (c === 0 ? product.images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === product.images.length - 1 ? 0 : c + 1));

  const selectVariant = (group, value) =>
    setSelectedVariants((prev) => ({ ...prev, [group]: value }));

  return (
    <div className="bg-white min-h-screen font-sans pb-8">

      {/* ── Carousel ─────────────────────────────────────────── */}
      <div className="relative w-full aspect-square bg-gray-100 overflow-hidden">
        <img
          src={product.images[current]}
          alt={`Product image ${current + 1}`}
          className="w-full h-full object-cover transition-opacity duration-300"
        />

        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1.5 shadow"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1.5 shadow"
        >
          <ChevronRight size={20} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {product.images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === current ? "bg-black w-4" : "bg-black/30"
              }`}
            />
          ))}
        </div>

        {/* Discount badge */}
        <span className="absolute top-3 left-3 bg-black text-white text-xs font-bold px-2 py-1 rounded-sm">
          {product.discount}% OFF
        </span>
      </div>

      {/* ── Content ──────────────────────────────────────────── */}
      <div className="px-4 space-y-5 mt-2">

        {/* Name */}
        <h1 className="text-xl font-bold tracking-tight leading-snug text-black">
          {product.name}
        </h1>

        {/* Price */}
        <div className="flex items-center gap-3">
          <span className="text-2xl font-black text-black">₵{product.newPrice}</span>
          <span className="text-base text-gray-400 line-through">₵{product.oldPrice}</span>
          <span className="text-sm font-semibold text-white bg-black px-2 py-0.5 rounded-sm">
            Save {product.discount}%
          </span>
        </div>

        {/* Variants */}
        {Object.entries(product.variants).map(([group, options]) => (
          <div key={group}>
            <p className="text-sm font-semibold text-black mb-2">
              {group}:{" "}
              <span className="font-normal text-gray-500">
                {selectedVariants[group] || "Select"}
              </span>
            </p>
            <div className="flex flex-wrap gap-2">
              {options.map((opt) => (
                <button
                  key={opt}
                  onClick={() => selectVariant(group, opt)}
                  className={`px-3 py-1.5 text-sm border rounded-sm transition-all ${
                    selectedVariants[group] === opt
                      ? "bg-black text-white border-black"
                      : "bg-white text-black border-gray-300"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        ))}

        {/* Divider */}
        <hr className="border-gray-100" />

        {/* Delivery Info */}
        <div>
            <div className="flex items-center gap-2 mb-4">
                <Truck size={18} strokeWidth={1.5} />
                <span className="text-sm font-bold">Delivery</span>
            </div>

            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-semibold text-black mb-1">
                        Region
                    </label>
                    <input
                        type="text"
                        placeholder="e.g. Greater Accra"
                        className="w-full border border-gray-300 rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-black"
                        value={region}
                        onChange={(e) => setRegion(e.target.value)}
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold text-black mb-1">
                        Location
                    </label>
                    <input
                        type="text"
                        placeholder="e.g. Oyarifa, Mile 7"
                        className="w-full border border-gray-300 rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-black"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </div>
            </div>

            <p className="text-xs text-gray-400 mt-3">
                Estimated delivery: {product.delivery}
            </p>
        </div>

        <hr className="border-gray-100" />

        {/* Return & Refund */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <RotateCcw size={18} strokeWidth={1.5} />
            <span className="text-sm font-bold">Return & Refund Policy</span>
          </div>
          <ul className="text-sm text-gray-500 space-y-1 pl-1">
            <li>— 7-day return window from date of delivery</li>
            <li>— Item must be unused and in original packaging</li>
            <li>— Refunds processed within 3–5 business days</li>
            <li>— Contact us via WhatsApp to initiate a return</li>
          </ul>
        </div>

        <hr className="border-gray-100" />

        {/* Specifications */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <ShieldCheck size={18} strokeWidth={1.5} />
            <span className="text-sm font-bold">Item Specifications</span>
          </div>
          <div className="divide-y divide-gray-100 border border-gray-100 rounded-sm overflow-hidden">
            {product.specs.map(({ key, value }) => (
              <div key={key} className="flex text-sm">
                <span className="w-2/5 px-3 py-2 bg-gray-50 text-gray-500 font-medium">{key}</span>
                <span className="w-3/5 px-3 py-2 text-black">{value}</span>
              </div>
            ))}
          </div>
        </div>

        <hr className="border-gray-100" />

        <div>
            <div className="flex items-center justify-between mb-2">
                <p className="text-md font-bold">Description</p>

                <button
                    onClick={() => setShowDescriptionDetails((prev) => !prev)}
                    className="transition-transform"
                >
                    <ChevronDown
                        size={18}
                        className={`transition-transform duration-200 ${
                        showDescriptionDetails ? "rotate-180" : ""
                        }`}
                    />
                </button>
            </div>

                {/* Always visible */}
            <p className="text-sm text-gray-500 leading-relaxed">
                {product.description}
            </p>

            {/* Expandable content */}
            {showDescriptionDetails && (
                <div className="mt-5 space-y-5">

                    <div>
                        <h3 className="font-semibold text-sm mb-2">  Features</h3>
                        <ul className="list-disc list-inside text-sm text-gray-500 space-y-1">
                        <li>Supports ultra-fast charging up to 100W.</li>
                        <li>Compact aluminum design.</li>
                        <li>Plug-and-play with no drivers required.</li>
                        <li>4K HDMI output.</li>
                        <li>Multiple USB-A and USB-C ports.</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-sm mb-2">
                           Included in Package
                        </h3>
                        <ul className="list-disc list-inside text-sm text-gray-500 space-y-1">
                        <li>1 × USB-C Hub</li>
                        <li>1 × User Manual</li>
                        <li>1 × Warranty Card</li>
                        </ul>
                    </div>

                </div>
            )}
        </div>

      </div>

      {/* ── Fixed Bottom CTA ─────────────────────────────────── */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-4 py-3 flex gap-3 z-50">
        <button className="flex-1 border border-black text-black text-sm font-semibold py-3 rounded-sm active:bg-gray-50 transition-colors">
          Add to Cart
        </button>
        <button className="flex-1 bg-black text-white text-sm font-semibold py-3 rounded-sm active:bg-gray-800 transition-colors">
          Buy Now
        </button>
      </div>

    </div>
  );
}

export default Productdetail;