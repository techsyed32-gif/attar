"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const productImages = [
    {
        id: 1,
        src: "/images/oud-1.jpg", // Add your assets in public/images
        alt: "Turkish Oud Bottle on Stone",
        caption: "Aged Agarwood & Ambergris",
    },
    {
        id: 2,
        src: "/images/oud-smoke.jpg",
        alt: "Turkish Oud Golden Smoke Cap Opening",
        caption: "Slow-Evaporating Pure Oil",
    },
    {
        id: 3,
        src: "/images/oud-landscape.jpg",
        alt: "Artisan Turkish Oud Sunkissed",
        caption: "Handcrafted 12ml Crystal Vial",
    },
];

export default function ProductGalleryMobile() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // Auto-scroll loop every 3 seconds if not touched
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            if (scrollContainerRef.current) {
                const nextIndex = (activeIndex + 1) % productImages.length;
                const width = scrollContainerRef.current.clientWidth;
                scrollContainerRef.current.scrollTo({
                    left: nextIndex * width,
                    behavior: "smooth",
                });
                setActiveIndex(nextIndex);
            }
        }, 3200);

        return () => clearInterval(interval);
    }, [activeIndex, isPaused]);

    // Handle manual scroll update
    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, clientWidth } = scrollContainerRef.current;
            const index = Math.round(scrollLeft / clientWidth);
            setActiveIndex(index);
        }
    };

    return (
        <div
            className="relative w-full overflow-hidden rounded-2xl bg-[#14100c] border border-[#2b2216]"
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Horizontal Carousel */}
            <div
                ref={scrollContainerRef}
                onScroll={handleScroll}
                className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none no-scrollbar"
                style={{ scrollSnapType: "x mandatory" }}
            >
                {productImages.map((img, idx) => (
                    <div
                        key={img.id}
                        className="flex-shrink-0 w-full snap-center relative aspect-[4/5] bg-[#1a140f]"
                    >
                        <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            sizes="(max-width: 768px) 100vw, 400px"
                            priority={idx === 0}
                            className="object-cover"
                        />
                        {/* Overlay Gradient & Caption */}
                        <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                            <p className="text-xs font-light text-[#f0e6d6] tracking-wide">
                                {img.caption}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination Indicators */}
            <div className="absolute bottom-3 right-4 flex items-center space-x-1.5 z-10">
                {productImages.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => {
                            if (scrollContainerRef.current) {
                                const width = scrollContainerRef.current.clientWidth;
                                scrollContainerRef.current.scrollTo({
                                    left: i * width,
                                    behavior: "smooth",
                                });
                                setActiveIndex(i);
                            }
                        }}
                        aria-label={`Go to image ${i + 1}`}
                        className={`h-1.5 rounded-full transition-all duration-300 ${activeIndex === i ? "w-6 bg-[#d49742]" : "w-1.5 bg-[#4a3b2b]"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}