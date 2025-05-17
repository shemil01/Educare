import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FloatingButton from "@/components/shared/FloatingButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Educare ",
  description: "Educare is best education center in Kerala",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <FloatingButton/>
        {children}
      </body>
    </html>
  );
}
