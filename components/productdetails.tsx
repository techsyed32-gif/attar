"use client";

import React, { useState } from "react";
import { ShieldCheck, Truck, Clock } from "lucide-react";

export default function ProductDetails() {
    const [selectedSize, setSelectedSize] = useState<"6ml" | "12ml">("12ml");

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left: Desktop Sticky Gallery (Hidden on Mobile) */}
            <div className="hidden md:flex flex-col gap-4 sticky top-28">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-[#2a2014] bg-[#15100b]">
                    <img
                        src="/images/oud-landscape.jpg"
                        alt="Turkish Oud"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                </div>
            </div>

            {/* Right: Product Details */}
            <div className="flex flex-col gap-6">
                <div>
                    <span className="text-xs uppercase tracking-[0.25em] text-[#d49742] font-medium">
                        Handmade Attar Oil • 100% Non-Alcoholic
                    </span>
                    <h2 className="text-3xl md:text-5xl font-serif text-[#fbf6ee] mt-1">
                        Turkish Oud Royale
                    </h2>
                    <div className="flex items-baseline gap-3 mt-3">
                        <span className="text-2xl md:text-3xl font-semibold text-[#f5ebd9]">
                            {selectedSize === "12ml" ? "$85.00" : "$48.00"}
                        </span>
                        <span className="text-sm line-through text-[#6e5d4c]">
                            {selectedSize === "12ml" ? "$110.00" : "$65.00"}
                        </span>
                        <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#352514] text-[#d49742] border border-[#d49742]/30">
                            SAVE 25%
                        </span>
                    </div>
                </div>

                {/* Size Selection */}
                <div>
                    <label className="text-xs uppercase tracking-wider text-[#9b8772]">
                        Select Bottle Size:
                    </label>
                    <div className="grid grid-cols-2 gap-3 mt-2">
                        {(["6ml", "12ml"] as const).map((size) => (
                            <button
                                key={size}
                                type="button"
                                onClick={() => setSelectedSize(size)}
                                className={`py-3 px-4 rounded-xl border text-sm font-medium transition-all ${selectedSize === size
                                        ? "border-[#d49742] bg-[#22180e] text-[#fbf6ee] shadow-[0_0_15px_rgba(212,151,66,0.2)]"
                                        : "border-[#2b2216] bg-[#120e0a] text-[#8e7a67] hover:border-[#4d3c29]"
                                    }`}
                            >
                                {size} Artisan Cut Vial
                            </button>
                        ))}
                    </div>
                </div>

                {/* Fragrance Notes Breakdown */}
                <div className="p-5 rounded-2xl bg-[#14100b] border border-[#2b2115] space-y-4">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d49742]">
                        Olfactory Architecture
                    </h3>
                    <div className="grid grid-cols-3 gap-3 text-center">
                        <div className="p-3 bg-[#1d1610] rounded-xl border border-[#2c2217]">
                            <p className="text-[10px] text-[#8f7b68] uppercase tracking-wider">Top</p>
                            <p className="text-xs font-serif text-[#f2e6d5] mt-1">Turkish Rose, Saffron</p>
                        </div>
                        <div className="p-3 bg-[#1d1610] rounded-xl border border-[#2c2217]">
                            <p className="text-[10px] text-[#8f7b68] uppercase tracking-wider">Heart</p>
                            <p className="text-xs font-serif text-[#f2e6d5] mt-1">Smoked Amber, Leather</p>
                        </div>
                        <div className="p-3 bg-[#1d1610] rounded-xl border border-[#2c2217]">
                            <p className="text-[10px] text-[#8f7b68] uppercase tracking-wider">Base</p>
                            <p className="text-xs font-serif text-[#f2e6d5] mt-1">Aged Cambodian Oud</p>
                        </div>
                    </div>
                </div>

                {/* Desktop Buy Button (Hidden on Mobile) */}
                <div className="hidden md:flex gap-4 pt-2">
                    <button className="flex-1 py-4 rounded-xl bg-gradient-to-r from-[#c89242] via-[#e5aa52] to-[#b87d32] text-black font-semibold tracking-wider uppercase text-sm shadow-[0_0_25px_rgba(212,151,66,0.3)] hover:brightness-110 active:scale-[0.99] transition-all">
                        Order Now • Free Express Shipping
                    </button>
                </div>

                {/* Reassurance Badges */}
                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#231a12] text-[#9a856f] text-xs">
                    <div className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-[#d49742]" />
                        <span>100% Pure Oil</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#d49742]" />
                        <span>18+ Hours Longevity</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Truck className="w-4 h-4 text-[#d49742]" />
                        <span>Worldwide Delivery</span>
                    </div>
                </div>
            </div>
        </div>
    );
}