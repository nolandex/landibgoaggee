import "@/styles/globals.css";
import { cn, generateMetadata } from "@/functions";
import { inter, satoshi } from "@/constants";
import { Toaster } from "@/components/ui/sonner";
import { Providers } from "@/components"; // Pastikan ini mengarah ke file providers Anda

export const metadata = generateMetadata();

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={cn(
                    "min-h-screen bg-background text-foreground antialiased font-default overflow-x-hidden !scrollbar-hide",
                    inter.variable,
                    satoshi.variable,
                )}
            >
                {/* Revisi: Hapus prop 'theme'. 
                  Toaster sekarang akan secara otomatis mengikuti tema dari ThemeProvider (next-themes).
                */}
                <Toaster
                    richColors
                    position="top-right"
                />
                
                {/* Pastikan komponen Providers ini berisi ThemeProvider */}
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    );
};
