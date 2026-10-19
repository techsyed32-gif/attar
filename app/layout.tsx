import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Turkish Oud | Artisanal Attar & Perfumes",
    description: "Pure, warm, spicy, and rich artisanal perfume oil.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="dark">
            <body className="antialiased selection:bg-[#c89242] selection:text-black">
                {children}
            </body>
        </html>
    );
}