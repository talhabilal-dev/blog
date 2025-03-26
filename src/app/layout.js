import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClerkProviderWrapper from "@/components/ClerkProviderWrapper";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Full Stack Blog",
  description:
    "A full stack blog using Next.js, Tailwind CSS, and Lucide icons",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClerkProviderWrapper>
          {children}
        </ClerkProviderWrapper>
      </body>
    </html>
  );
}
