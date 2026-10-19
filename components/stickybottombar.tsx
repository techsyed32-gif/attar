"use client";

import React, { useState } from "react";
import { ShoppingBag, ChevronRight } from "lucide-react";

export default function StickyBottomBar() {
    const [quantity, setQuantity] = useState(1);

    return (
        <div className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-[#120d08]/95 backdrop-blur-lg border-t border-[#332617] px-4 py-3 shadow-[0_-10px_25px_rgba(0,0,0,0.7)]">
            <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
                {/* Price & Quantity Controls */}
                <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider text-[#9f8a74]">
                        12ml Bottle
                    </span>
                    <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-[#faf3e7]">$85.00</span>
                        <div className="flex items-center bg-[#21180f] border border-[#382b1b] rounded-lg">
                            <button
                                type="button"
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                className="w-6 h-6 flex items-center justify-center text-xs text-[#d49742]"
                            >
                                -
                            </button>
                            <span className="text-xs px-1 text-[#f3ebde]">{quantity}</span>
                            <button
                                type="button"
                                onClick={() => setQuantity(quantity + 1)}
                                className="w-6 h-6 flex items-center justify-center text-xs text-[#d49742]"
                            >
                                +
                            </button>
                        </div>
                    </div>
                </div>

                {/* Primary Call to Action */}
                <button
                    type="button"
                    onClick={() => alert(`Proceeding to checkout with ${quantity} item(s)!`)}
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-gradient-to-r from-[#c89242] via-[#e5aa52] to-[#c89242] text-black font-semibold text-sm tracking-wider uppercase shadow-[0_0_20px_rgba(212,151,66,0.35)] active:scale-95 transition-all"
                >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Buy Now</span>
                    <ChevronRight className="w-4 h-4 ml-0.5" />
                </button>
            </div>
        </div>
    );
}