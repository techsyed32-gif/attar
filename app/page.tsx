"use client";

import React from "react";
import HeroSection from "@/components/herosection";
import ProductGalleryMobile from "@/components/productgallerymobile";
import ProductDetails from "@/components/productdetails";
import StickyBottomBar from "@/components/stickybottombar";

export default function TurkishOudPage() {
    return (
        <main className="min-h-screen bg-[#0e0b08] text-[#f5efe6] selection:bg-[#c89242] selection:text-black">
            {/* 1. Cinematic Scroll-Driven Hero */}
            <HeroSection />

            {/* 2. Mobile-Only Horizontal Auto-Scroll Gallery */}
            <section className="block md:hidden px-4 py-8">
                <h3 className="text-xs uppercase tracking-[0.25em] text-[#c89242] mb-3">
                    Gallery & Visual Notes
                </h3>
                <ProductGalleryMobile />
            </section>

            {/* 3. Product Storytelling & Specs */}
            <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-24">
                <ProductDetails />
            </section>

            {/* 4. Mobile Fixed Bottom Buy Now Bar */}
            <StickyBottomBar />
        </main>
    );
}