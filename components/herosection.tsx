"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, Droplets, Flame } from "lucide-react";

export default function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    // Track scroll progress through this pinned container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Scroll animations
    const videoScale = useTransform(scrollYProgress, [0, 0.6], [1, 1.15]);
    const videoOpacity = useTransform(scrollYProgress, [0.7, 1], [1, 0.35]);
    const titleY = useTransform(scrollYProgress, [0, 0.5], [0, -60]);
    const subtitleOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
    const badgeScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.85]);

    return (
        <div ref={containerRef} className="relative h-[200vh] w-full bg-[#0a0806]">
            {/* Sticky Viewport Container */}
            <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">
                {/* Ambient Warm Golden Glow */}
                <div className="absolute inset-0 bg-radial from-[#d49742]/15 via-transparent to-black pointer-events-none z-10" />

                {/* Video / Background Layer */}
                <motion.div
                    style={{ scale: videoScale, opacity: videoOpacity }}
                    className="absolute inset-0 w-full h-full flex items-center justify-center"
                >
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover object-center filter brightness-[0.88] contrast-105"
                        poster="/images/turkish-oud-poster.jpg"
                    >
                        {/* Replace with your video file in the /public folder */}
                        <source src="/videos/turkish-oud.mp4" type="video/mp4" />
                    </video>
                    {/* Subtle dark gradient overlay to ensure text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e0b08] via-transparent to-black/60" />
                </motion.div>

                {/* Foreground Content */}
                <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-4xl">
                    {/* Brand Tag */}
                    <motion.div
                        style={{ scale: badgeScale }}
                        className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#c89242]/40 bg-[#16120c]/70 backdrop-blur-md mb-4"
                    >
                        <Sparkles className="w-3.5 h-3.5 text-[#e5aa52]" />
                        <span className="text-[11px] md:text-xs tracking-[0.3em] uppercase text-[#e5aa52] font-medium">
                            Pure Artisanal Attar
                        </span>
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                        style={{ y: titleY }}
                        className="text-4xl sm:text-6xl md:text-8xl font-serif tracking-tight text-[#fbf7f0] drop-shadow-lg"
                    >
                        TURKISH OUD
                    </motion.h1>

                    {/* Scent Profile Pills */}
                    <motion.div
                        style={{ opacity: subtitleOpacity }}
                        className="flex items-center justify-center gap-3 md:gap-6 mt-4 text-xs md:text-sm tracking-widest text-[#d8c3a5]"
                    >
                        <span className="flex items-center gap-1.5">
                            <Flame className="w-3.5 h-3.5 text-[#d49742]" /> WARM
                        </span>
                        <span className="text-[#64523d]">•</span>
                        <span className="flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-[#d49742]" /> SPICY
                        </span>
                        <span className="text-[#64523d]">•</span>
                        <span className="flex items-center gap-1.5">
                            <Droplets className="w-3.5 h-3.5 text-[#d49742]" /> RICH
                        </span>
                    </motion.div>

                    <p className="hidden md:block mt-6 text-sm text-[#c4b39b]/80 max-w-md mx-auto leading-relaxed">
                        Distilled from aged agarwood resins, warm amber tears, and Turkish
                        damascena extracts. Scroll to experience the aroma unfolding.
                    </p>

                    {/* Scroll Down Indicator */}
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                        className="mt-12 flex flex-col items-center gap-1 text-[10px] uppercase tracking-[0.25em] text-[#a48e73]"
                    >
                        <span>Scroll to Unveil</span>
                        <div className="w-[1px] h-6 bg-gradient-to-b from-[#c89242] to-transparent" />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}